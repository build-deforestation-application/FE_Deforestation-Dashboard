import React, { useEffect } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Polygon,
} from 'react-google-maps';
import Axios from 'axios';

const MapContainer = () => {
  const [mapData, setMapData] = React.useState([]);
  useEffect(() => {
    Axios.get(
      'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json',
    ).then(res => {
      setMapData(res.data.features);
    });
  }, []);

  console.log(<GoogleMap />);
  // const renderDudes = data => {
  //   return data.map(type => {
  //     if (type.geometry.coordinates.length > 2) {
  //       console.log(type);
  //       console.log(<GoogleMap />);
  //     }
  //     if (type.geometry.coordinates.length === 2) {
  //       const coords = type.geometry.coordinates[0][0];
  //       const coordArr = [];
  //       coords.map(coord => coordArr.push({ lat: coord[1], lng: coord[0] }));

  //       return (
  //         <Polygon
  //           path={coordArr}
  //           options={{
  //             strokeColor: '#fc1e0d',
  //             strokeOpacity: 1,
  //             strokeWeight: 2,
  //             icons: [
  //               {
  //                 icon: 'hello',
  //                 offset: '0',
  //                 repeat: '10px',
  //               },
  //             ],
  //           }}
  //         />
  //       );
  //     }

  //     if (type.geometry.coordinates.length === 1) {
  //       const coords = type.geometry.coordinates[0];
  //       const coordArr = [];
  //       coords.map(coord => coordArr.push({ lat: coord[1], lng: coord[0] }));

  //       return (
  //         <Polygon
  //           path={coordArr}
  //           options={{
  //             strokeColor: '#fc1e0d',
  //             strokeOpacity: 1,
  //             strokeWeight: 2,
  //             icons: [
  //               {
  //                 icon: 'hello',
  //                 offset: '0',
  //                 repeat: '10px',
  //               },
  //             ],
  //           }}
  //         />
  //       );
  //     }
  //   });
  // };

  return (
    <>
      <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lng: 61.210817, lat: 35.650072 }}
        // data={addGeoJson(mapData)}
      />
    </>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(MapContainer));

export default WrappedMap;
