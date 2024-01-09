import React, { useState } from 'react';
import { Container, Paper, Typography, Button, TextField } from '@mui/material';

const SignupPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    window.location.href = '/signin';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, isLogin: ${isLogin ? 'Login' : 'Signup'}`);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '100px', marginBottom: '100px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Sign Up
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
            Sign Up
          </Button>
        </form>
        <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '20px' }}>
          Already have an account?{' '}
          <Button onClick={handleToggle} color="primary" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
            Sign In
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default SignupPage;
