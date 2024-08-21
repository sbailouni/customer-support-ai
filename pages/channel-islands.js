import React from 'react';
import ParkTemplate from '../components/ParkTemplate';
import MiniChatbox from '../components/MiniChatbox';
import HikingIcon from '@mui/icons-material/Terrain';
import CampingIcon from '@mui/icons-material/LocalFireDepartment';
import WildlifeIcon from '@mui/icons-material/Pets';

const ChannelIslandsPage = () => {
  return (
    <>
      <ParkTemplate
        parkName="Channel Islands National Park"
        description="Explore the rugged beauty of California's Channel Islands, often referred to as the 'Galapagos of North America.'"
        overview="Channel Islands National Park encompasses five of the eight Channel Islands off the coast of southern California. The park is known for its rich biodiversity, unique flora and fauna, and pristine coastal waters. Activities include hiking, kayaking, and snorkeling."
        activities={[
          { name: 'Hiking', icon: <HikingIcon /> },
          { name: 'Kayaking', icon: <HikingIcon /> },
          { name: 'Camping', icon: <CampingIcon /> },
          { name: 'Snorkeling', icon: <HikingIcon /> }
        ]}
        visitorInfo={[
          { text: 'Park Hours: Open year-round', icon: <HikingIcon /> },
          { text: 'Entrance Fees: Free', icon: <HikingIcon /> },
          { text: 'Getting to Channel Islands: By boat or plane from Ventura or Santa Barbara', icon: <HikingIcon /> },
          { text: 'Best Time to Visit: Spring and fall', icon: <HikingIcon /> }
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

export default ChannelIslandsPage;
