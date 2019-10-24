import React, { useContext } from 'react';
import ControlsContext from '../../contexts/ControlsContext';

export default () => {

  const { temp, data } = useContext(ControlsContext)
  console.log('DATA DISPLAY:',data)
  // {() => <pre>{JSON.stringify(data.find(x => x.Country === temp.country), null, 2)}</pre>}
  const years = [];

  for (let i = 1990; i <= 2016; i++) {
      years.push(i);
    }
  
  console.log('YEARS',years)

  const formatData = (array) => {
    return Object.entries(array).filter((x) => x[0] !== "Country" && x[0] !== "Code");
}

  return (
      <ControlsContext.Consumer>
        {() => {
          return (
            <>
              <table>
                <thead>
                  {years.map(year => <th>{year}</th>)}
                </thead>
                <tbody>

                </tbody>
              </table>
            </>
          )
        }}
      </ControlsContext.Consumer>
  );
};
