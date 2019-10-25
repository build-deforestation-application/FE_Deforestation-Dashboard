import React, { useState, useEffect } from 'react';
import fetchData from '../../services/queryApi';
import styled from 'styled-components';

// components
import Display from '../../components/panels/Display';
import Info from '../../components/panels/Info';
import Controls from '../../components/panels/Controls';
import ControlsContext from '../../contexts/ControlsContext';

const StyledDashboard = styled.div`
  background: #f2eee5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
`;

export default () => {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchData().then(res => setData(res.data));
  }, []);

  return (
    <ControlsContext.Provider
      value={{ data, setData, temp, setTemp, history, setHistory }}
    >
      <StyledDashboard>
        <h1>Welcome, User</h1>
        <Controls />
        <Info />
        {/* data temp */}
        <Display />
      </StyledDashboard>
    </ControlsContext.Provider>
  );
};
