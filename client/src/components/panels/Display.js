import React, { useContext } from 'react';
import ControlsContext from '../../contexts/ControlsContext';
import makeArray from '../../selectors/selectors';
import styled from 'styled-components';

import Table from './Table';

export default () => {
  const { temp, data } = useContext(ControlsContext);
  console.log('DATA DISPLAY:', data);
  // {() => <pre>{JSON.stringify(data.find(x => x.Country === temp.country), null, 2)}</pre>}
  const years = [];
  const Tortilla = styled.div`
    max-width: 80%;
  `;

  for (let i = 1990; i <= 2016; i++) {
    years.push(i);
  }

  console.log('YEARS', years);

  return (
    <ControlsContext.Consumer>
      {() => {
        return (
          <>
            {data.map((country, index) => {
              const year = makeArray(country, ['Country', 'Code']);
              return (
                <Tortilla>
                <Table
                  key={index}
                  country={country.Country}
                  code={country.Code}
                  year={year}
                />
                </Tortilla>
              );
            })}
          </>
        );
      }}
    </ControlsContext.Consumer>
  );
};
