import React from 'react';
import MapContainer from './containers/map/MapContainer';
import { Switch, Route } from 'react-router-dom'

// components
import Private from './utils/Private'
import LoginForm from './components/forms/login/LoginForm'
// import SignUpForm from './components/forms/signup/SignUpForm'

const App = () => {
  return (
    <>
      <div>
        <Switch>
          <Route path='/' component={LoginForm} />
          <Route path='/signup' component='SignUpFormComponentHere' />
          <Private path='/dashboard' component={MapContainer} />
        </Switch>
        {/* <MapContainer /> */}
      </div>
    </>
  );
};
export default App;
