import React from 'react';
import SignupForm from './components/forms/signup/SignupForm';
import LoginForm from './components/forms/login/LoginForm';
import MapContainer from './containers/map/MapContainer';
import RightSidebar from './components/sidebar/RightSidebar';

const App = () => {
  return (
    <div>
      <LoginForm />
      <SignupForm />
      <RightSidebar />
      {/* <MapContainer /> */}
    </div>
  );
};

export default App;
