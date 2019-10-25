import React, { useEffect } from 'react';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

import getData from '../../services/getData';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default () => {
  useEffect(() => {
    const map = L.map('map', {
      center: [-10.99404, 39.75621],
      zoom: 8,
      zoomControl: true,
    });

    getData().then(res => L.geoJson(res.data.features).addTo(map));

    L.tileLayer(
      `https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`,
      {
        detectRetina: true,
        maxZoom: 19,
        maxNativeZoom: 17,
      },
    ).addTo(map);
  }, []);

  return (
    <>
      <Wrapper width="40vw" height="40vh" id="map" />
    </>
  );
};
