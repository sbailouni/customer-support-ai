import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import HistoryIcon from '@mui/icons-material/History';
import { useRouter } from 'next/router';

const parks = [
  { name: 'Channel Islands National Park', path: '/channel-islands' },
  { name: 'Death Valley National Park', path: '/death-valley' },
  { name: 'Joshua Tree National Park', path: '/joshua-tree' },
  { name: 'Kings Canyon National Park', path: '/kings-canyon' },
  { name: 'Lassen Volcanic National Park', path: '/lassen-volcanic' },
  { name: 'Pinnacles National Park', path: '/pinnacles' },
  { name: 'Redwood National and State Parks', path: '/redwood' },
  { name: 'Sequoia National Park', path: '/sequoia' },
  { name: 'Yosemite National Park', path: '/yosemite' }
];

export default function ParksList() {
  const router = useRouter();

  const handleParkClick = (path) => {
    router.push(path);
  };

  return (
    <Box sx={{ 
      width: '250px',  
      bgcolor: '#f9f4ed', // Background color
      padding: 1.5, 
      borderRight: '1px solid #e0d8cc',  // Border color
      height: '500px', // Match the height of MainChatbox
      display: 'flex', 
      flexDirection: 'column',
      overflow: 'hidden', 
      borderRadius: '8px', 
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Button variant="contained" size="small" sx={{ 
          textTransform: 'none', 
          backgroundColor: '#c8b8a6', // Button background color
          color: '#5b4e4a' // Button text color
        }}>
          Create new chat
        </Button>
        <IconButton size="small" aria-label="Chat History" sx={{ color: '#5b4e4a' }}>
          <HistoryIcon fontSize="small" />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 1, borderColor: '#e0d8cc' }} />
      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: '#5b4e4a' }}>
        California National Parks
      </Typography>
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <List dense sx={{ padding: 0 }}>
          {parks.map((park, index) => (
            <ListItem 
              key={index} 
              sx={{ padding: '2px 0', cursor: 'pointer' }} // Reduced padding for closer items
              onClick={() => handleParkClick(park.path)}
            >
              <ListItemText 
                primary={park.name} 
                sx={{ color: '#5b4e4a', fontSize: '0.875rem' }} 
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
