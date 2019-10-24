import React from 'react';
// import MapContainer from './containers/map/MapContainer';
import { Switch, Route } from 'react-router-dom';

// components
import Private from './utils/Private';
import LoginForm from './components/forms/login/LoginForm';
import SignUpForm from './components/forms/signup/SignupForm';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <>
      <div>
        <LoginForm />
      </div>
    </>
  );
};

export default App;
