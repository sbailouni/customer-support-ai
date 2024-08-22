import { NextResponse } from 'next/server';
import OpenAI from 'openai'; 
import fetch from 'node-fetch';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
});

const npsApiKey = process.env.NPS_API_KEY;
const weatherApiKey = process.env.WEATHER_API_KEY;

// Fetch data from NPS API
async function fetchFromNPS(endpoint) {
    const url = `https://developer.nps.gov/api/v1/${endpoint}?api_key=${npsApiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(`Error fetching data from ${endpoint}:`, err);
        throw new Error(`Error fetching data from ${endpoint}`);
    }
}

// Get coordinates for the park
async function fetchParkCoordinates(parkName) {
    const url = `https://developer.nps.gov/api/v1/parks?api_key=${npsApiKey}&q=${parkName}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
            const park = data.data[0];
            return {
                latitude: park.latitude,
                longitude: park.longitude,
            };
        }
        throw new Error('Park not found');
    } catch (err) {
        console.error('Error fetching park coordinates:', err);
        throw new Error('Error fetching park coordinates');
    }
}

// Fetch weather data from coordinates
async function fetchWeather(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`; // Use 'units=imperial' for Fahrenheit
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error fetching weather data:', err);
        throw new Error('Error fetching weather data');
    }
}

const hikingSafety = "It always pays off to brush up on hiking safety before setting off on a new adventure in the great outdoors! Remember to always stay on marked trails, bring plenty of water, wear appropriate clothing and footwear, and let someone know your plans before heading out. It's also important to be aware of the weather and wildlife in the area. In our vast state of California, it's important to be mindful of local ecosystems and weather changes that may differ from the area you're visiting from. I'm always available to give you recommendations based on the area you will be visiting.";

const whatToBring = "For a hike, you should bring plenty of water, snacks, sunscreen, a map or GPS—if you want to use your smartphone, make sure you have a good data plan and download the offline version of the trail map you'll be using. Always check the weather to find out what appropriate clothing and footwear will be, and consider trekking poles if the terrain is challenging. A basic first aid kit is always helpful. Stay safe and have fun!";

const systemPrompt = `
You are a cheerful and knowledgeable California Park Ranger. Your role is to provide helpful information about national parks in California, focusing on hiking safety and enjoyment. Encourage users to find hikes that match their skill level and goals based on the locations they provide and activities. Answer questions with accurate and relevant details about hiking trails, weather conditions, and what to bring on a hike.

Here are some common responses:
- If a user asks about hiking safety, respond with: "${hikingSafety}"
- If a user asks about what to bring on a hike, respond with: "${whatToBring}"
`;

// Main handler for POST requests
export async function POST(req) {
    const data = await req.json();
    const userQuery = data.messages[0].content.toLowerCase();
    let npsData;
    let weatherData;
    let parkCoordinates;

    // Determine NPS endpoint based on user query
    if (userQuery.includes('parks')) {
        npsData = await fetchFromNPS('parks');
    } else if (userQuery.includes('alerts')) {
        npsData = await fetchFromNPS('alerts');
    } else if (userQuery.includes('events')) {
        npsData = await fetchFromNPS('events');
    }

    // If the user query mentions a park, get coordinates and weather
    if (userQuery.includes('park')) {
        const parkName = userQuery.split('park')[1].trim(); // Extract park name
        try {
            parkCoordinates = await fetchParkCoordinates(parkName);
            weatherData = await fetchWeather(parkCoordinates.latitude, parkCoordinates.longitude);
        } catch (err) {
            console.error('Error fetching park or weather data:', err);
        }
    }

    // Create messages for OpenAI
    const messages = [
        {
            role: 'system',
            content: systemPrompt,
        },
        ...data.messages,
        {
            role: 'system', // Use 'system' to maintain context
            content: npsData ? `NPS Data: ${JSON.stringify(npsData)}` : 'No relevant data found.',
        },
        {
            role: 'system', // Add weather data if available
            content: weatherData ? `Weather Data: ${JSON.stringify(weatherData)}` : 'No weather data available.',
        }
    ];

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini', // Updated model name for OpenAI
            messages: messages,
            stream: true,
        });

        const stream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                try {
                    for await (const chunk of completion) {
                        const content = chunk.choices[0]?.delta?.content;
                        if (content) {
                            const text = encoder.encode(content);
                            controller.enqueue(text);
                        }
                    }
                } catch (err) {
                    controller.error(err);
                } finally {
                    controller.close();
                }
            }
        });

        return new NextResponse(stream);
    } catch (err) {
        console.error('Error processing request:', err);
        return new NextResponse('Error processing request', { status: 500 });
    }
}