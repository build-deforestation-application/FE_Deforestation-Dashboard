import React, { useEffect } from 'react';
import Axios from 'axios';
import MapContainer from './containers/map/MapContainer';

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapContainer
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBFx7hyKdz_P_zqJCvtG_S07js4cOXupAQ"
      />
    </div>
  );
};
export default App;
