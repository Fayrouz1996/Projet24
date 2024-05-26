import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { fetchTasks } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getTasks = async () => {
      const { data } = await fetchTasks();
      setTasks(data);
    };

    getTasks();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>
      <Button onClick={logout} variant="contained" color="secondary">
        Logout
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TaskForm currentId={currentId} setCurrentId={setCurrentId} tasks={tasks} setTasks={setTasks} />
        </Grid>
        <Grid item xs={12} md={8}>
          <TaskList tasks={tasks} setCurrentId={setCurrentId} setTasks={setTasks} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
