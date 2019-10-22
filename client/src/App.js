import React from 'react';
// import MapContainer from './containers/map/MapContainer';
import { Switch, Route } from 'react-router-dom'

// components
import Private from './utils/Private'
import LoginForm from './components/forms/login/LoginForm'
import SignUpForm from './components/forms/signup/SignupForm'
import Dashboard from './components/dashboard/Dashboard'

const App = () => {
  return (
    <>
      <div>
        <Switch>
          <Route path='/signup' component={SignUpForm} />
          <Private path='/dashboard' component={Dashboard} />
          <Route exact path='/' component={LoginForm} />
        </Switch>
      </div>
    </>
  );
};

export default App;
