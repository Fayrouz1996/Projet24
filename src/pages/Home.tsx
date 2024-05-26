import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Task Manager
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button component={Link} to="/login" variant="contained" color="primary">
            Login
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/register" variant="contained" color="secondary">
            Register
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
