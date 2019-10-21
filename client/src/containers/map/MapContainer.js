import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapContainer = () => {
  return (
    <div className="map-container-flex">
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyBFx7hyKdz_P_zqJCvtG_S07js4cOXupAQ` }}
          center={{ lat: 30.2672, lng: -97.7431 }}
          defaultZoom={14}
        />
      </div>
    </div>
  );
};

export default MapContainer;
