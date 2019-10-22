import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

import { fetchTrace } from '../../actions';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const mapStateToProps = state => {
  return {
    trace: state.search.trace,
    fetched: state.search.fetched,
    fetching: state.search.fetching,
  };
};

export default connect(
  mapStateToProps,
  { fetchTrace },
)(({ fetchTrace, trace, fetched, fetching }) => {
  useEffect(() => {
    const map = L.map('map', {
      center: [-10.99404, 39.75621],
      zoom: 8,
      zoomControl: true,
    });

    const myLayer = L.geoJSON().addTo(map);
    // getData().then(res => L.geoJson(res.data.features).addTo(map));
    fetchTrace();

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
      <Wrapper width="100vw" height="100vh" id="map" />
    </>
  );
});
