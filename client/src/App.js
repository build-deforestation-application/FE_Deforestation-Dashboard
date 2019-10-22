import React from 'react';
import SignupForm from './components/forms/signup/SignupForm';
import LoginForm from './components/forms/login/LoginForm';
import MapContainer from './containers/map/MapContainer';

const App = () => (
  <div>
    <p>Hello World</p>
    <LoginForm />
    <SignupForm />
    <MapContainer />
  </div>
);

export default App;
