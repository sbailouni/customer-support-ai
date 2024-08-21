// pages/index.js
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleAuth = async () => {
    // Temporarily redirect to dashboard without authentication
    router.push('/home');
  };

  return (
    <Container maxWidth="xs" sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f9f4ed', // Background color similar to the image
      color: '#5b4e4a' // Text color similar to the image
    }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Box sx={{ mb: 2 }}>
          {/* Placeholder for the logo */}
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {/* Use your logo here, currently replaced by text */}
            ⛰️
          </Typography>
        </Box>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Welcome back
        </Typography>
        <Typography variant="body1" component="p">
          Enter your email and password to sign in.
        </Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          InputLabelProps={{
            sx: {
              color: '#5b4e4a', // Label color similar to the image
            },
          }}
          inputProps={{
            sx: {
              backgroundColor: '#fbf8f4', // Input background color similar to the image
              borderColor: '#e0d8cc', // Input border color similar to the image
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          InputLabelProps={{
            sx: {
              color: '#5b4e4a', // Label color similar to the image
            },
          }}
          inputProps={{
            sx: {
              backgroundColor: '#fbf8f4', // Input background color similar to the image
              borderColor: '#e0d8cc', // Input border color similar to the image
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAuth}
          sx={{
            mt: 2,
            textTransform: 'none',
            backgroundColor: '#c8b8a6', // Button background color similar to the image
            color: '#5b4e4a', // Button text color similar to the image
          }}
        >
          Sign In
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" align="center" sx={{ color: '#5b4e4a' }}>
          Don&apos;t have an account?{' '}
          <Button onClick={() => setIsSignup(!isSignup)} variant="text" color="inherit" sx={{ textTransform: 'none', color: '#5b4e4a' }}>
            Sign up
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}
