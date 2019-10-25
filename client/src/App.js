import React from 'react';
import Login from './components/forms/login/Login';
import Dashboard from './containers/dashboard/Dashboard';
import Private from './utils/PrivateRoute';

import SignUpForm from './components/forms/signup/SignupForm';

import { Switch, Route } from 'react-router-dom';
import Navbar from './components/panels/Navbar';
import MapView from './containers/map/MapView';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Private path="/charts" component={Dashboard} />
        <Private path="/map" component={MapView} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/" component={Login} />
      </Switch>
    </>
  );
};

export default App;
