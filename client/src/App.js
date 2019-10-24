import React from 'react';
// import MapContainer from './containers/map/MapContainer';
import { Switch, Route } from 'react-router-dom';

// components
// import Private from './utils/Private';
// import LoginForm from './components/forms/login/LoginForm';
// import SignUpForm from './components/forms/signup/SignupForm';
// import Dashboard from './components/dashboard/Dashboard';
// import Navbar from './components/navbar/Navbar';
import Map from './containers/map/MapContainer';

const App = () => {
  return (
    <>
      <Map />
      {/* <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Private path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={LoginForm} />
        </Switch> */}
    </>
  );
};

export default App;
