import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Avatar, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Navbar from '../comp/NavBar/NavBar';

const Register = () => {
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');

  const handleCityChange = (event:any) => {
    setCity(event.target.value);
  };

  const handleGenderChange = (event:any) => {
    setGender(event.target.value);
  };

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
            src="https://www.example.com/avatar.jpg"  // Replace with the actual URL of the avatar image
            sx={{ width: 100, height: 100, margin: '0 auto', marginBottom: 2 }}
          />
          <TextField label="City" value={city} onChange={handleCityChange} fullWidth margin="normal" />
          <TextField label="Username" fullWidth margin="normal" />
          <TextField label="Email" type="email" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          <TextField label="Birthday" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
          <FormControl fullWidth margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={handleGenderChange}>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" fullWidth>
            Register
          </Button>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Already have an account? <a href="/login">Login</a>
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Register;
