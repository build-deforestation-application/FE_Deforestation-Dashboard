import React, { useContext } from 'react';
import ControlsContext from '../../contexts/ControlsContext';
import makeArray from '../../selectors/selectors';

import Table from './Table';

export default () => {
  const { temp, data } = useContext(ControlsContext);

  return (
    <ControlsContext.Consumer>
      {() => {
        return (
          <>
            {data.length ? (
              data.map((country, index) => {
                const year = makeArray(country, ['Country', 'Code']);
                return (
                  <Table
                    key={index}
                    country={country.Country}
                    code={country.Code}
                    year={year}
                  />
                );
              })
            ) : (
              <h1>Loading tables...</h1>
            )}
          </>
        );
      }}
    </ControlsContext.Consumer>
  );
};
