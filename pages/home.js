// pages/home.js
import React from 'react';
import { Container, Box } from '@mui/material';
import ParksList from '../components/ParksList';
import MainChatbox from '../components/MainChatbox';

export default function Home() {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 4, backgroundColor: '#bfb397' }}>
      <ParksList />
      <MainChatbox />
    </Container>
  );
}
