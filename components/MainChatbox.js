import React, { useState, useEffect } from 'react';
import { Box, TextField, IconButton, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';

const MainChatbox = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Set initial message when component mounts
    const initialMessages = [
      { role: 'assistant', content: 'Hi, I\'m the California RangerBot! Ask me anything about California National Parks.' },
    ];
    setMessages(initialMessages);
  }, []);

  const defaultResponse = 'How can I assist you today?';
  const errorResponse = 'Sorry, I did not understand that. Can you please rephrase your question about California National Parks?';

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message; // Save the current user message
    setMessage(''); // Clear the input field

    // Add the user message and placeholder assistant message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: userMessage },
      { role: 'assistant', content: "" } // Placeholder for assistant message
    ]);

    try {
      const response = await fetch('/api/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...messages, { role: 'user', content: userMessage }] }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let result = '';

      const processText = async ({ done, value }) => {
        if (done) {
          if (result.trim() === '') {
            // If no valid response from the API, show the error message
            result = errorResponse;
          }
          return result;
        }

        const text = decoder.decode(value || new Uint8Array(), { stream: true });
        result += text;

        // Update the assistant's response message in the chat
        setMessages((messages) => {
          const lastMessage = messages[messages.length - 1];
          const otherMessages = messages.slice(0, messages.length - 1);
          const updatedMessages = [
            ...otherMessages,
            {
              ...lastMessage,
              content: lastMessage.content + text,
            },
          ];
          return updatedMessages;
        });

        const nextChunk = await reader.read();
        return processText(nextChunk);
      };

      await reader.read().then(processText);

    } catch (error) {
      console.error('Error fetching the response:', error);
      // In case of an error, show the errorResponse message
      setMessages((messages) => {
        const lastMessage = messages[messages.length - 1];
        const otherMessages = messages.slice(0, messages.length - 1);
        const updatedMessages = [
          ...otherMessages,
          {
            ...lastMessage,
            content: errorResponse,
          },
        ];
        return updatedMessages;
      });
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
          Hello, User
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
            <Box 
              key={index} 
              sx={{ 
                display: 'flex', 
                justifyContent: msg.role === 'assistant' ? 'flex-start' : 'flex-end', 
                mb: 1 
              }}
            >
              <Box 
                sx={{ 
                  bgcolor: msg.role === 'assistant' ? '#c8b8a6' : '#e0d8cc', 
                  color: '#5b4e4a', 
                  py: 1,
                  px: 2, 
                  borderRadius: 2, 
                  maxWidth: '70%' 
                }}
              >
                <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                  {msg.content}
                </Typography>
              </Box>
            </Box>
          ))
        )}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="standard"
          placeholder="What should I bring on my hike today?..."
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          sx={{
            mr: 1,
            input: { color: '#5b4e4a', padding: '10px' },
            '& .MuiInput-underline:before': { borderBottomColor: '#e0d8cc' },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#c8b8a6' },
            '& .MuiInput-underline:after': { borderBottomColor: '#c8b8a6' },
          }}
        />
        <IconButton 
          onClick={sendMessage} 
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
};
export default MainChatbox;