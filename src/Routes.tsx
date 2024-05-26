import React from 'react';
import {
  Routes as ReactRoutes,
  Route,
  Navigate
} from 'react-router-dom';

import { AuthGuard } from './guards/auth-guard';

import Users from './views/Users';
import UserDetails from './views/UserDetails';
import Login from './views/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './components/Register';

const Routes = (): JSX.Element => {
  return (
    <ReactRoutes>
      <Route
        path="/users"
        element={
          <AuthGuard><Users /></AuthGuard>
        }
      />
      <Route
        path="/users/:id"
        element={
          <AuthGuard><UserDetails /></AuthGuard>
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={<Navigate replace to="/users" />}
      />

      <Route 
        path="/" 
        element={<Home />} 
      />
        
      <Route 
        path="/login" 
        element={<Login />} 
      />
        
      <Route
         path="/register" 
         element={<Register />} 
      />
        
      <Route 
        path="/dashboard" 
        element={<Dashboard />} 
      />

    </ReactRoutes>
  );
};

export default Routes;
