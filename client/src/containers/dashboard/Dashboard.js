import React, { useState, useEffect } from 'react';
import fetchData from '../../services/queryApi';

// components
import Search from '../../components/panels/Search';
import Display from '../../components/panels/Display';
import Info from '../../components/panels/Info';
import Bottom from '../../components/panels/Bottom';
import ControlsContext from '../../contexts/ControlsContext';

export default () => {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState({});
  // does history need temp/setTemp for onSubmit?

  useEffect(() => {
    fetchData().then(res => setData(res.data));
  }, []);

  return (
    <ControlsContext.Provider value={{data, setData, temp, setTemp}}>
      <h1>Data is here</h1>
      <Info />{/* data temp */}
      <Display />{/* data temp */}
      <Bottom /> {/* data setTemp */}
    </ControlsContext.Provider>
  );
};