import React, { useState } from 'react';
import MapOld from '../../components/maps/MapOld';
import MapNew from '../../components/maps/MapNew';

export default () => {
  const [year, setYear] = useState(true);

  return (
    <div style={{ marginTop: '100px' }}>
      <button onClick={() => setYear(!year)}>
        {year ? 'Display data for 2025' : 'Display data for 1990'}
      </button>
      {year ? <MapOld /> : <MapNew />}
    </div>
  );
};
