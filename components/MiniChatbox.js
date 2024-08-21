import React, { useState } from 'react';
import { Box, TextField, IconButton, Typography, Fab } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

const MiniChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };

  return (
    <Box sx={{ 
      position: 'fixed', 
      bottom: 16, 
      right: 16, 
      width: isOpen ? 300 : 'auto', 
      height: isOpen ? 400 : 'auto',
      bgcolor: '#f9f4ed', 
      borderRadius: '8px',
      boxShadow: 3,
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #e0d8cc',
      overflow: 'hidden',
    }}>
      {isOpen ? (
        <>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            bgcolor: '#c8b8a6', 
            padding: '8px',
            color: '#5b4e4a'
          }}>
            <Typography variant="subtitle1">
              Chat with Us
            </Typography>
            <IconButton onClick={toggleChatbox} size="small" sx={{ color: '#5b4e4a' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ 
            flexGrow: 1, 
            padding: '8px', 
            overflowY: 'auto', 
            bgcolor: '#fbf8f4' 
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
          <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
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
        </>
      ) : (
        <Fab 
          onClick={toggleChatbox} 
          color="primary" 
          aria-label="chat" 
          sx={{ 
            bgcolor: '#c8b8a6', 
            color: '#5b4e4a',
            '&:hover': {
              bgcolor: '#5b4e4a',
              color: '#c8b8a6'
            }
          }}
        >
          <ChatIcon />
        </Fab>
      )}
    </Box>
  );
};

export default MiniChatbox;
