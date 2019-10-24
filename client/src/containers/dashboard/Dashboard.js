import React, { useState, useEffect } from 'react';
import fetchData from '../../services/queryApi';

import Left from '../../components/panels/Left';
import Display from '../../components/panels/Display';

export default () => {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState({});

  useEffect(() => {
    fetchData().then(res => setData(res.data));
  }, []);

  return (
    <>
      Data is here
      <Left data={data} setTemp={setTemp} />
      <Display data={data} temp={temp} />
    </>
  );
};
