import React, { useState, useEffect } from 'react';
import fetchData from '../../services/queryApi';

import Bottom from '../../components/panels/Bottom';
import Display from '../../components/panels/Display';
import Info from '../../components/panels/Info';

export default () => {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState({});

  useEffect(() => {
    fetchData().then(res => setData(res.data));
  }, []);

  return (
    <>
      Data is here
      <Bottom data={data} setTemp={setTemp} />
      <Info data={data} temp={temp} />
      <Display data={data} temp={temp} />
    </>
  );
};
