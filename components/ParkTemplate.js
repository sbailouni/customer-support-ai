import React from 'react';
import { Box, Typography, Grid, Divider, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';

const ParkTemplate = ({ parkName, description, overview, activities, visitorInfo, gallery }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/home');
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 4, bgcolor: '#ffffff', borderRadius: '8px', position: 'relative' }}>
      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: '#3c3c3c',
          '&:hover': {
            bgcolor: '#f5f5f5',
          },
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#3c3c3c', mb: 2 }}>
          {parkName}
        </Typography>
        <Typography variant="h6" sx={{ color: '#666666' }}>
          {description}
        </Typography>
      </Box>

      {/* Overview Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3c3c3c', mb: 2 }}>
          Overview
        </Typography>
        <Typography variant="body1" sx={{ color: '#666666' }}>
          {overview}
        </Typography>
      </Box>

      {/* Activities Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3c3c3c', mb: 2 }}>
          Activities
        </Typography>
        <Grid container spacing={3}>
          {activities.map((activity, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={0} sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5' }}>
                {activity.icon && (
                  <Box sx={{ p: 2, color: '#3c3c3c' }}>
                    {activity.icon}
                  </Box>
                )}
                <CardContent>
                  <Typography variant="body1" sx={{ color: '#3c3c3c' }}>
                    {activity.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6, borderColor: '#e0e0e0' }} />

      {/* Visitor Info Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3c3c3c', mb: 2 }}>
          Visitor Info
        </Typography>
        <Grid container spacing={3}>
          {visitorInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={0} sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5' }}>
                {info.icon && (
                  <Box sx={{ p: 2, color: '#3c3c3c' }}>
                    {info.icon}
                  </Box>
                )}
                <CardContent>
                  <Typography variant="body1" sx={{ color: '#3c3c3c' }}>
                    {info.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6, borderColor: '#e0e0e0' }} />

      {/* Gallery Section */}
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3c3c3c', mb: 2 }}>
          Gallery
        </Typography>
        <Grid container spacing={3}>
          {gallery.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={2}>
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    bgcolor: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#999999' }}>
                    {image.placeholderText}
                  </Typography>
                </CardMedia>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ParkTemplate;
