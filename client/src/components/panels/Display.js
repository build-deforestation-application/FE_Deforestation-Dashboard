import React, { useContext } from 'react';
import ControlsContext from '../../contexts/ControlsContext';

export default () => {

  const { temp, data } = useContext(ControlsContext)

  return (
      <ControlsContext.Consumer>
          {() => <pre>{JSON.stringify(data.find(x => x.Country === temp.country), null, 2)}</pre>}
      </ControlsContext.Consumer>
  );
};
