import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

export const fetchTasks = () => API.get('/tasks');
export const createTask = (task: any) => API.post('/tasks', task);
export const updateTask = (id: string, updatedTask: any) => API.put(`/tasks/${id}`, updatedTask);
export const deleteTask = (id: string) => API.delete(`/tasks/${id}`);
export const register = (formData: any) => API.post('/auth/register', formData);
export const login = (formData: any) => API.post('/auth/login', formData);
