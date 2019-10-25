import React from 'react';
// import MapContainer from './containers/map/MapContainer';
import { Switch, Route } from 'react-router-dom';

// components
// import Private from './utils/Private';
// import LoginForm from './components/forms/login/LoginForm';
// import SignUpForm from './components/forms/signup/SignupForm';
// import Dashboard from './components/dashboard/Dashboard';
// import Navbar from './components/navbar/Navbar';
import Map from './containers/map/MapOld';
import NewMap from './containers/map/MapNew';

const App = () => {
  const [year, setYear] = React.useState(true);
  return (
    <>
      <button onClick={() => setYear(!year)}>Toggle</button>
      {year ? <Map /> : <NewMap />}
      {/* <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Private path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={LoginForm} />
        </Switch> */}
    </>
  );
};

export default App;
