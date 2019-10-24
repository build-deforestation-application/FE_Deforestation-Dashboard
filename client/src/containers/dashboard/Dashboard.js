import React, { useState, useEffect } from 'react';
import fetchData from '../../services/queryApi';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(res => setData(res.data));
  }, []);

  return (
    <>
      Data is here
      {/* Display children */}
    </>
  );
};
