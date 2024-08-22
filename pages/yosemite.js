import React from 'react';
import ParkTemplate from '../components/ParkTemplate';
import MiniChatbox from '../components/MiniChatbox'; // Import MiniChatbox
import HikingIcon from '@mui/icons-material/Terrain';
import CampingIcon from '@mui/icons-material/LocalFireDepartment';
import WildlifeIcon from '@mui/icons-material/Pets';

const YosemitePage = () => {
  return (
    <>
      <ParkTemplate
        parkName="Yosemite National Park"
        description="Discover the natural wonders of Yosemite, from its iconic granite cliffs and cascading waterfalls to its diverse wildlife and endless outdoor adventures."
        overview="Yosemite National Park is a vast wilderness area in California's Sierra Nevada mountains. It's renowned for its granite cliffs, waterfalls, and diverse wildlife. The park is home to the iconic Half Dome and El Capitan rock formations, as well as the towering Sequoia trees and the thundering Yosemite Falls. Visitors can explore the park's many hiking trails, go rock climbing, or simply take in the breathtaking scenery."
        activities={[
          { name: 'Hiking', icon: <HikingIcon /> },
          { name: 'Rock Climbing', icon: <HikingIcon /> },
          { name: 'Camping', icon: <CampingIcon /> },
          { name: 'Wildlife Viewing', icon: <WildlifeIcon /> },
          { name: 'Waterfall Exploration', icon: <HikingIcon /> }
        ]}
        visitorInfo={[
          { text: 'Park Hours: 24 hours a day, 365 days a year', icon: <HikingIcon /> },
          { text: 'Entrance Fees: $35 per vehicle, $20 per individual', icon: <HikingIcon /> },
          { text: 'Getting to Yosemite: Located in central California, about a 4-hour drive from San Francisco', icon: <HikingIcon /> },
          { text: 'Best Time to Visit: Spring and fall for milder weather, summer for peak season', icon: <HikingIcon /> }
        ]}
        gallery={[
          { src: '/images/yo1.png' },
          { src: '/images/yo2.png' },
          { src: '/images/yo3.png' },
          { src: '/images/yo4.png' }
        ]}
      />
      <MiniChatbox /> {/* Add MiniChatbox component here */}
    </>
  );
};

export default YosemitePage;
