import React from 'react';
import MapContainer from './containers/map/MapContainer';
import { Switch, Route } from 'react-router-dom'

// components
import Private from './utils/Private'
import LoginForm from './components/forms/login/LoginForm'

const App = () => {
  return (
    <>
      <div>
        <Switch>
          <Route path='/' component={LoginForm} />
          <Private path='/dashboard' component={MapContainer} />
        </Switch>
        {/* <MapContainer /> */}
      </div>
    </>
  );
};
export default App;
