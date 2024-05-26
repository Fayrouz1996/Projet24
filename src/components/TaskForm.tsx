import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { createTask, updateTask } from '../services/api';

const TaskForm = ({ currentId, setCurrentId, tasks, setTasks }: any) => {
  const [taskData, setTaskData] = useState({ title: '', description: '', status: '', dueDate: '' });

  useEffect(() => {
    if (currentId) {
      const task = tasks.find((t: any) => t._id === currentId);
      if (task) setTaskData(task);
    }
  }, [currentId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentId) {
      const { data } = await updateTask(currentId, taskData);
      setTasks(tasks.map((task: any) => (task._id === currentId ? data : task)));
      setCurrentId(null);
    } else {
      const { data } = await createTask(taskData);
      setTasks([...tasks, data]);
    }

    setTaskData({ title: '', description: '', status: '', dueDate: '' });
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={taskData.title}
            onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            variant="outlined"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={taskData.description}
            onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="status"
            variant="outlined"
            label="Status"
            fullWidth
            value={taskData.status}
            onChange={(e) => setTaskData({ ...taskData, status: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="dueDate"
            variant="outlined"
            label="Due Date"
            fullWidth
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={taskData.dueDate}
            onChange={(e) => setTaskData({ ...taskData, dueDate: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
            {currentId ? 'Update' : 'Create'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskForm;
