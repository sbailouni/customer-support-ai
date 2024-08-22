import React from 'react';
import ParkTemplate from '../components/ParkTemplate';
import MiniChatbox from '../components/MiniChatbox';
import HikingIcon from '@mui/icons-material/Terrain';
import CampingIcon from '@mui/icons-material/LocalFireDepartment';
import WildlifeIcon from '@mui/icons-material/Pets';

const KingsCanyonPage = () => {
  return (
    <>
      <ParkTemplate
        parkName="Kings Canyon National Park"
        description="Experience the dramatic landscape of deep valleys, towering trees, and rugged mountains."
        overview="Kings Canyon National Park is located in California's Sierra Nevada mountains, adjacent to Sequoia National Park. The park features deep glacial canyons, towering sequoia trees, and high mountain peaks. It's a paradise for hikers, campers, and nature lovers."
        activities={[
          { name: 'Hiking', icon: <HikingIcon /> },
          { name: 'Camping', icon: <CampingIcon /> },
          { name: 'Wildlife Viewing', icon: <WildlifeIcon /> },
          { name: 'Fishing', icon: <HikingIcon /> }
        ]}
        visitorInfo={[
          { text: 'Park Hours: Open year-round', icon: <HikingIcon /> },
          { text: 'Entrance Fees: $35 per vehicle, $20 per individual', icon: <HikingIcon /> },
          { text: 'Getting to Kings Canyon: About 4.5 hours from Los Angeles by car', icon: <HikingIcon /> },
          { text: 'Best Time to Visit: Summer and fall', icon: <HikingIcon /> }
        ]}
        gallery={[
          { src: '/images/kings1.png' },
          { src: '/images/kings2.png' },
          { src: '/images/kings3.png' },
          { src: '/images/kings4.png' }
        ]}
      />
      <MiniChatbox />
    </>
  );
};

export default KingsCanyonPage;
