import React from 'react';
import ParkTemplate from '../components/ParkTemplate';
import MiniChatbox from '../components/MiniChatbox'; // Import MiniChatbox
import HikingIcon from '@mui/icons-material/Terrain';
import CampingIcon from '@mui/icons-material/LocalFireDepartment';
import CavesIcon from '@mui/icons-material/Explore';
import CondorIcon from '@mui/icons-material/Flight';

const PinnaclesPage = () => {
  return (
    <>
      <ParkTemplate
        parkName="Pinnacles National Park"
        description="Discover the rugged beauty of Pinnacles, where unique rock formations, talus caves, and soaring condors await."
        overview="Pinnacles National Park, located in Central California, is known for its stunning rock spires, talus caves, and as a habitat for the endangered California condor. Visitors can explore miles of scenic hiking trails that wind through the park's unique geological features, offering opportunities for rock climbing, cave exploration, and wildlife viewing. The park's diverse landscape is home to a variety of species, making it a great destination for nature enthusiasts."
        activities={[
          { name: 'Hiking', icon: <HikingIcon /> },
          { name: 'Rock Climbing', icon: <HikingIcon /> },
          { name: 'Cave Exploration', icon: <CavesIcon /> },
          { name: 'Wildlife Viewing', icon: <CondorIcon /> },
          { name: 'Camping', icon: <CampingIcon /> }
        ]}
        visitorInfo={[
          { text: 'Park Hours: Open daily from sunrise to sunset', icon: <HikingIcon /> },
          { text: 'Entrance Fees: $30 per vehicle, $15 per individual', icon: <HikingIcon /> },
          { text: 'Getting to Pinnacles: Located in Central California, about 2 hours from San Jose', icon: <HikingIcon /> },
          { text: 'Best Time to Visit: Spring and fall for milder temperatures', icon: <HikingIcon /> }
        ]}
        gallery={[
          { src: '/images/pinnacle1.png' },
          { src: '/images/pinnacle2.png' },
          { src: '/images/pinnacle3.png' },
          { src: '/images/pinnacle4.png' }
        ]}
      />
      <MiniChatbox /> {/* Add MiniChatbox component here */}
    </>
  );
};

export default PinnaclesPage;
