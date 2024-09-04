require('dotenv').config();
const OpenAI = require('openai');
const { Readable } = require('stream'); // Node.js built-in stream module

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error('OPENAI_API_KEY is not defined in the environment variables');
}

const openai = new OpenAI({
  apiKey: openaiApiKey,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body; // Assuming that body-parser is handling this correctly
      console.log('Incoming data:', data);

      if (!data || !Array.isArray(data)) {
        throw new Error('Invalid request body. Expected an array of messages.');
      }

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // or 'gpt-4' depending on your model
        messages: data,
        stream: true,
      });

      const readableStream = new Readable({
        read() {} // No-op read function
      });

      completion.on('data', (chunk) => {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          readableStream.push(content); // Push content to the readable stream
        }
      });

      completion.on('end', () => {
        readableStream.push(null); // Signal the end of the stream
      });

      completion.on('error', (err) => {
        console.error('OpenAI API streaming error:', err);
        readableStream.emit('error', err); // Emit an error if OpenAI streaming fails
      });

      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      readableStream.pipe(res); // Pipe the readable stream to the response

    } catch (error) {
      console.error('Error in POST request:', error.message);
      res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
