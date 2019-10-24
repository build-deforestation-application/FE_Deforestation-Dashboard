import React, { useState, useEffect } from 'react';
import fetchData from '../../services/queryApi';

// components
import Display from '../../components/panels/Display';
import Info from '../../components/panels/Info';
import Bottom from '../../components/panels/Bottom';
import ControlsContext from '../../contexts/ControlsContext';

export default () => {
  const [ data, setData ] = useState([]);
  const [ temp, setTemp ] = useState({});
  const [ history, setHistory ] = useState([]);
  


  useEffect(() => {
    fetchData().then(res => setData(res.data));
  }, []);

  return (
    <ControlsContext.Provider value={{ data, setData, temp, setTemp, history, setHistory }}>
      <h1>Data is here</h1>
      <Info />{/* data temp */}
      <Display />{/* data temp */}
      <Bottom /> {/* data setTemp */}
    </ControlsContext.Provider>
  );
};