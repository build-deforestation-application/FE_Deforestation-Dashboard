import React, { useState, useEffect } from 'react';
import getRaw from '../../services/getRaw';
import axiosWithAuth from '../../utils/axios';

import RightSidebar from './sidebar/RightSidebar';
import Map from '../../containers/map/MapContainer';
import Navbar from '../../components/navbar/Navbar';

import dashboard from './dashboard.module.scss';

export default () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getRaw().then(res => {
      console.log(res);
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className={dashboard.container}>
        <Map />
        <RightSidebar />
      </div>
    </>
  );
};
