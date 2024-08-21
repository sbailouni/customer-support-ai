// components/MainChatbox.js
import React, { useState } from 'react';
import { Box, TextField, IconButton, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';

export default function MainChatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const name = "User"; // Replace with actual user name
  const router = useRouter();

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: 500, 
      bgcolor: '#f9f4ed',
      borderRadius: '8px', 
      p: 2, 
      display: 'flex',
      flexDirection: 'column',
      height: '500px',
      border: '1px solid #e0d8cc'
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 2, 
        pb: 1, 
        borderBottom: '1px solid #e0d8cc'
      }}>
        <Typography variant="h6" color="#5b4e4a">
          Hello, {name}
        </Typography>
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            color: '#5b4e4a',
            borderColor: '#c8b8a6',
            '&:hover': {
              bgcolor: '#c8b8a6',
              borderColor: '#c8b8a6',
            }
          }}
        >
          Logout
        </Button>
      </Box>
      <Box sx={{ 
        flexGrow: 1, 
        overflowY: 'auto', 
        mb: 2 
      }}>
        {messages.length === 0 ? (
          <Typography variant="body2" color="#5b4e4a" align="center" sx={{ mt: 2 }}>
            Start the conversation...
          </Typography>
        ) : (
          messages.map((msg, index) => (
            <Box key={index} sx={{ 
              display: 'flex', 
              justifyContent: msg.sender === 'You' ? 'flex-end' : 'flex-start', 
              mb: 1 
            }}>
              <Box sx={{ 
                bgcolor: msg.sender === 'You' ? '#c8b8a6' : '#e0d8cc', 
                color: '#5b4e4a', 
                py: 1,
                px: 2, 
                borderRadius: 2, 
                maxWidth: '70%' 
              }}>
                <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                  {msg.text}
                </Typography>
              </Box>
            </Box>
          ))
        )}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="standard"
          placeholder="Type your message..."
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          sx={{
            mr: 1,
            input: { color: '#5b4e4a', padding: '10px' },
            '& .MuiInput-underline:before': { borderBottomColor: '#e0d8cc' },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#c8b8a6' },
            '& .MuiInput-underline:after': { borderBottomColor: '#c8b8a6' },
          }}
        />
        <IconButton 
          onClick={handleSend} 
          sx={{ 
            color: '#c8b8a6',
            '&:hover': {
              bgcolor: 'transparent',
              color: '#5b4e4a'
            }
          }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
