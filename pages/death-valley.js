import React from 'react';
import ParkTemplate from '../components/ParkTemplate';
import MiniChatbox from '../components/MiniChatbox';
import HikingIcon from '@mui/icons-material/Terrain';
import CampingIcon from '@mui/icons-material/LocalFireDepartment';
import WildlifeIcon from '@mui/icons-material/Pets';




const DeathValleyPage = () => {
  return (
    <>
      <ParkTemplate
        parkName="Death Valley National Park"
        description="Discover the hottest, driest, and lowest national park in the United States."
        overview="Death Valley National Park is located in eastern California. It is known for its extreme temperatures, vast salt flats, sand dunes, and unique desert landscape. The park offers a range of activities, from exploring the Badwater Basin to hiking in the mountains."
        activities={[
          { name: 'Hiking', icon: <HikingIcon /> },
          { name: 'Camping', icon: <CampingIcon /> },
          { name: 'Wildlife Viewing', icon: <WildlifeIcon /> },
          { name: 'Scenic Drives', icon: <HikingIcon /> }
        ]}
        visitorInfo={[
          { text: 'Park Hours: Open year-round', icon: <HikingIcon /> },
          { text: 'Entrance Fees: $30 per vehicle, $15 per individual', icon: <HikingIcon /> },
          { text: 'Getting to Death Valley: About 2 hours from Las Vegas by car', icon: <HikingIcon /> },
          { text: 'Best Time to Visit: Fall, winter, and spring', icon: <HikingIcon /> }
        ]}
        gallery={[
          { src: "/images/deathvalley1.jpg" },
          { src: "/images/deathvalley2.png"  },
          { src: "/images/deathvalley3.png"  },
          { src: "/images/deathvalley4.png"  }
        ]}
      />
      <MiniChatbox />
    </>
  );
};

export default DeathValleyPage;
