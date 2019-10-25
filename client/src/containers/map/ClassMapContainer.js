import React from 'react';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

import getData from '../../services/getData';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      year: '1990',
    };
  }
  componentDidMount() {
    const map = L.map('map', {
      center: [-10.99404, 39.75621],
      zoom: 4,
      zoomControl: true,
    });

    getData().then(res =>
      L.geoJson(res.data.features, {
        onEachFeature: setColor,
      }).addTo(map),
    );

    const setColor = (feature, layer) => {
      layer.options.weight = 1;
      layer.options.fillOpacity = feature.properties[this.state.year] / 100;
    };

    // L.tileLayer(
    //   `https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`,
    //   {
    //     detectRetina: true,
    //     maxZoom: 19,
    //     maxNativeZoom: 17,
    //   },
    // ).addTo(map);
  }

  componentDidUpdate() {
    const newmap = L.map('newmap', {
      center: [-10.99404, 39.75621],
      zoom: 4,
      zoomControl: true,
    });

    getData().then(res =>
      L.geoJson(res.data.features, {
        onEachFeature: setColor,
      }).addTo(newmap),
    );

    const setColor = (feature, layer) => {
      layer.options.weight = 1;
      layer.options.fillOpacity = feature.properties[this.state.year] / 100;
    };

    L.tileLayer(
      `https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`,
      {
        detectRetina: true,
        maxZoom: 19,
        maxNativeZoom: 17,
      },
    ).addTo(newmap);
  }

  clickHandler = () => {
    if (this.state.year === '1990') {
      this.setState({ year: '2025' });
    } else {
      this.setState({ year: '1990' });
    }
  };

  render() {
    return (
      <>
        <button
          type="submit"
          onClick={() => {
            this.clickHandler();
          }}
        >
          Touch me
        </button>
        {this.state.year === '1990' ? (
          <Wrapper width="100%" height="100vh" id="map" />
        ) : (
          <Wrapper width="100%" height="100vh" id="newmap" />
        )}
      </>
    );
  }
}

export default Map;
