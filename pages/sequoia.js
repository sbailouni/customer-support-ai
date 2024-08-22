import React from 'react';
import ParkTemplate from '../components/ParkTemplate';
import MiniChatbox from '../components/MiniChatbox';
import HikingIcon from '@mui/icons-material/Terrain';
import CampingIcon from '@mui/icons-material/LocalFireDepartment';
import WildlifeIcon from '@mui/icons-material/Pets';

const SequoiaPage = () => {
  return (
    <>
      <ParkTemplate
        parkName="Sequoia National Park"
        description="Explore the giant sequoias, some of the largest trees on Earth, in this breathtaking national park."
        overview="Sequoia National Park is located in California's southern Sierra Nevada mountains. It's famous for its giant sequoia trees, including the General Sherman Tree, the largest tree on Earth. The park also features stunning landscapes, including deep canyons, rugged foothills, and mountain peaks."
        activities={[
          { name: 'Hiking', icon: <HikingIcon /> },
          { name: 'Rock Climbing', icon: <HikingIcon /> },
          { name: 'Camping', icon: <CampingIcon /> },
          { name: 'Wildlife Viewing', icon: <WildlifeIcon /> }
        ]}
        visitorInfo={[
          { text: 'Park Hours: Open year-round', icon: <HikingIcon /> },
          { text: 'Entrance Fees: $35 per vehicle, $20 per individual', icon: <HikingIcon /> },
          { text: 'Getting to Sequoia: About 4.5 hours from Los Angeles by car', icon: <HikingIcon /> },
          { text: 'Best Time to Visit: Summer and fall', icon: <HikingIcon /> }
        ]}
        gallery={[
          { src: '/images/seq1.png' },
          { src: '/images/seq2.png' },
          { src: '/images/seq3.png' },
          { src: '/images/seq4.png' }
        ]}
      />
      <MiniChatbox />
    </>
  );
};

export default SequoiaPage;
