import React from 'react';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { deleteTask } from '../services/api';

const TaskList = ({ tasks, setCurrentId, setTasks }: any) => {
  const handleDelete = async (id: string) => {
    await deleteTask(id);
    setTasks(tasks.filter((task: any) => task._id !== id));
  };

  return (
    <List>
      {tasks.map((task: any) => (
        <ListItem key={task._id} button onClick={() => setCurrentId(task._id)}>
          <ListItemText primary={task.title} secondary={task.description} />
          <ListItemSecondaryAction>
            <Button variant="contained" color="secondary" onClick={() => handleDelete(task._id)}>
              Delete
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
