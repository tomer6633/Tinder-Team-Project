import React from 'react';
import { Container, Paper, Typography, Avatar, Button } from '@mui/material';
import Navbar from '../comp/NavBar/NavBar';

const Profile = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, borderRadius: 5, backgroundColor: '#f5f5f5', width: '100%', textAlign: 'center' }}>
          <Avatar
            alt="User Avatar"
            // src={user.image} // Replace with the actual URL of the avatar image
            sx={{ width: 100, height: 100, margin: 'auto', marginBottom: 2 }}
          />
          <Typography variant="h5" gutterBottom>
            {/* {user.name} */}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {/* Age:{user.age} */}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {/* Gender: {user.gender} */}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {/* City: {user.City} */}
          </Typography>
          <Button variant="outlined" color="primary" fullWidth>
            Edit Profile
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Profile;
