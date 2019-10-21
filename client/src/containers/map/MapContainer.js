import React, { useEffect } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Polygon,
} from 'react-google-maps';
import Axios from 'axios';

const renderRegions = data => {
  const coordArr = [];
  //   data needs to be in this shape
  //   this can be rewritten such that it returns the component in the map ofc, but this was just a proof of concept
  data.map(coord => coordArr.push({ lat: coord[1], lng: coord[0] }));
  return (
    <Polygon
      path={coordArr}
      options={{
        strokeColor: '#fc1e0d',
        strokeOpacity: 1,
        strokeWeight: 2,
        icons: [
          {
            icon: 'hello',
            offset: '0',
            repeat: '10px',
          },
        ],
      }}
    />
  );
};

const MapContainer = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    Axios.get(
      'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json',
    ).then(res => {
      setData(res.data.features);
    });
  }, []);
  return (
    <>
      {' '}
      <GoogleMap defaultZoom={10} defaultCenter={{ lat: 12, lng: 12 }} />
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(MapContainer));

export default WrappedMap;
