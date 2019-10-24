import React from 'react';

export default ({ temp, data }) => {
  return (
    <pre>
      {JSON.stringify(data.find(x => x.Country === temp.country), null, 2)}
    </pre>
  );
};
