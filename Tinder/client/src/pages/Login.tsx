import React from 'react'
import Navbar from '../comp/NavBar/NavBar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';

function Login() {
  const navigate = useNavigate();
  const handleLogin = async (ev:any) => {
    try {
      ev.preventDefault();
      const email = ev.currentTarget.elements.email.value;
      const password = ev.currentTarget.elements.password.value;
      if (!email) throw new Error('No email');
      if (!password) throw new Error('No Password');

      // const newUser: User = {
      //   email, password,
      //   username: '',
      // };
      try {
        const response = await axios.post('/api/users/login');
        const data = response.data;
        const { ok } = data;
        if (ok) {
          navigate("/")
        }
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <Navbar />
    <Container
      maxWidth="xs"
      sx={{
        display: 'grid',
        placeItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 5, backgroundColor: '#f5f5f5', width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <Typography variant="subtitle1" fontWeight="bold">
              Email:
            </Typography>
            <TextField
              type="email"
              name="email"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          </div>
          <div className="form-group">
            <Typography variant="subtitle1" fontWeight="bold">
              Password:
            </Typography>
            <TextField
              type="password"
              name="password"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          </div>
          <Button type="submit" variant="contained" color="primary" sx={{ paddingY: 1 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  </>
  )
}

export default Login