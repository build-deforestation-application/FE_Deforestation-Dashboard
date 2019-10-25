import React from 'react';
import Login from './components/forms/login/Login';
import Dashboard from './containers/dashboard/Dashboard';
import Private from './utils/PrivateRoute';

import SignUpForm from './components/forms/signup/SignupForm';

import { Switch, Route } from 'react-router-dom';
import Navbar from './components/panels/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/" component={Login} />
      </Switch>
    </>
  );
};

export default App;
