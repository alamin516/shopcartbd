import React, { useState } from 'react';
import { Container, Paper, Typography, Button, TextField } from '@mui/material';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleToggle = () => {
    window.location.href = '/create-account'
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: '100px', marginBottom: '100px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginTop: '20px' }}
          />
          <TextField
            margin="normal"
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginTop: '10px' }}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ marginTop: '20px' }}>
            Sign In
          </Button>
        </form>
        <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '20px' }}>
          Don't have an account? {" "}
          <Button onClick={handleToggle} color="primary" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
            Create an account
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default SigninPage;
