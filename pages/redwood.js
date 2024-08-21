import React from 'react';
import ParkTemplate from '../components/ParkTemplate';
import MiniChatbox from '../components/MiniChatbox';
import HikingIcon from '@mui/icons-material/Terrain';
import CampingIcon from '@mui/icons-material/LocalFireDepartment';
import WildlifeIcon from '@mui/icons-material/Pets';

const RedwoodPage = () => {
  return (
    <>
      <ParkTemplate
        parkName="Redwood National and State Parks"
        description="Discover the tallest trees in the world and the stunning coastal beauty of northern California."
        overview="Redwood National and State Parks are located in northern California, home to some of the tallest trees in the world. The parks offer a unique combination of lush forests, coastal views, and rich biodiversity. Visitors can enjoy scenic drives, hiking trails, and wildlife viewing."
        activities={[
          { name: 'Hiking', icon: <HikingIcon /> },
          { name: 'Camping', icon: <CampingIcon /> },
          { name: 'Wildlife Viewing', icon: <WildlifeIcon /> },
          { name: 'Scenic Drives', icon: <HikingIcon /> }
        ]}
        visitorInfo={[
          { text: 'Park Hours: Open year-round', icon: <HikingIcon /> },
          { text: 'Entrance Fees: Free', icon: <HikingIcon /> },
          { text: 'Getting to Redwood: About 5 hours from San Francisco by car', icon: <HikingIcon /> },
          { text: 'Best Time to Visit: Summer and early fall', icon: <HikingIcon /> }
        ]}
        gallery={[
          { placeholderText: 'Image 1' },
          { placeholderText: 'Image 2' },
          { placeholderText: 'Image 3' },
          { placeholderText: 'Image 4' }
        ]}
      />
      <MiniChatbox />
    </>
  );
};

export default RedwoodPage;
