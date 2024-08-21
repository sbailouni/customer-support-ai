import React from 'react';
import ParkTemplate from '../components/ParkTemplate';
import MiniChatbox from '../components/MiniChatbox'; // Import MiniChatbox
import HikingIcon from '@mui/icons-material/Terrain';
import CampingIcon from '@mui/icons-material/LocalFireDepartment';
import GeologyIcon from '@mui/icons-material/Public';
import HotSpringsIcon from '@mui/icons-material/HotTub';

const LassenVolcanicPage = () => {
  return (
    <>
      <ParkTemplate
        parkName="Lassen Volcanic National Park"
        description="Explore the dynamic volcanic landscape of Lassen, featuring bubbling hot springs, fumaroles, and breathtaking peaks."
        overview="Lassen Volcanic National Park, located in Northern California, is a geological wonderland featuring active volcanic landscapes, including fumaroles, boiling springs, and the dramatic Lassen Peak. The park offers a variety of outdoor activities, such as hiking through volcanic terrain, camping near serene lakes, and observing unique geothermal features. The Bumpass Hell Trail is a popular destination for witnessing the park's volcanic activity up close."
        activities={[
          { name: 'Hiking', icon: <HikingIcon /> },
          { name: 'Volcano Viewing', icon: <GeologyIcon /> },
          { name: 'Camping', icon: <CampingIcon /> },
          { name: 'Geothermal Exploration', icon: <HotSpringsIcon /> },
          { name: 'Wildlife Viewing', icon: <HikingIcon /> }
        ]}
        visitorInfo={[
          { text: 'Park Hours: Open year-round, but access may be limited by snow in winter', icon: <HikingIcon /> },
          { text: 'Entrance Fees: $30 per vehicle, $15 per individual', icon: <HikingIcon /> },
          { text: 'Getting to Lassen: Located in Northern California, about a 3-hour drive from Sacramento', icon: <HikingIcon /> },
          { text: 'Best Time to Visit: Summer and early fall for hiking and accessibility', icon: <HikingIcon /> }
        ]}
        gallery={[
          { placeholderText: 'Image 1' },
          { placeholderText: 'Image 2' },
          { placeholderText: 'Image 3' },
          { placeholderText: 'Image 4' }
        ]}
      />
      <MiniChatbox /> {/* Add MiniChatbox component here */}
    </>
  );
};

export default LassenVolcanicPage;
