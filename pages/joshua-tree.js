import React from 'react';
import ParkTemplate from '../components/ParkTemplate';
import MiniChatbox from '../components/MiniChatbox';
import HikingIcon from '@mui/icons-material/Terrain';
import CampingIcon from '@mui/icons-material/LocalFireDepartment';
import WildlifeIcon from '@mui/icons-material/Pets';

const JoshuaTreePage = () => {
  return (
    <>
      <ParkTemplate
        parkName="Joshua Tree National Park"
        description="Explore the unique desert landscape and the iconic Joshua trees that give this park its name."
        overview="Joshua Tree National Park is located in southern California, where the Mojave and Colorado deserts meet. The park is known for its unique rock formations, iconic Joshua trees, and stunning desert landscape. It's a popular destination for rock climbing, stargazing, and exploring desert ecology."
        activities={[
          { name: 'Hiking', icon: <HikingIcon /> },
          { name: 'Rock Climbing', icon: <HikingIcon /> },
          { name: 'Camping', icon: <CampingIcon /> },
          { name: 'Stargazing', icon: <HikingIcon /> }
        ]}
        visitorInfo={[
          { text: 'Park Hours: Open year-round', icon: <HikingIcon /> },
          { text: 'Entrance Fees: $30 per vehicle, $15 per individual', icon: <HikingIcon /> },
          { text: 'Getting to Joshua Tree: About 2.5 hours from Los Angeles by car', icon: <HikingIcon /> },
          { text: 'Best Time to Visit: Spring and fall', icon: <HikingIcon /> }
        ]}
        gallery={[
          { src: '/images/joshua1.png' },
          { src: '/images/joshua2.png' },
          { src: '/images/joshua3.png' },
          { src: '/images/joshua4.png' }
        ]}
      />
      <MiniChatbox />
    </>
  );
};

export default JoshuaTreePage;
