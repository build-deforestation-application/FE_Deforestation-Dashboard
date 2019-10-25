import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import getData from '../../services/getData';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const createMap = () => {
  let map = L.map('map', {
    center: [-10.99404, 39.75621],
    zoom: 4,
    zoomControl: true,
  });

  const setColor = (feature, layer) => {
    const options = layer.options;
    if (feature.id === 'ATA') {
      options.color = '#FFFFFF';
      options.fill = false;
    }
    options.weight = 0.5;
    options.color = '#71eeb8';
    options.fillOpacity = feature.properties['2025'] / 100;
  };

  getData().then(res =>
    L.geoJson(res.data.features, {
      onEachFeature: setColor,
    }).addTo(map),
  );

  map &&
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      {
        minZoom: 3,
        maxZoom: 10,
      },
    ).addTo(map);
};

export default () => {
  useEffect(() => {
    createMap();
  }, []);

  return (
    <>
      <Wrapper width="100%" height="100vh" id="map" />
    </>
  );
};
