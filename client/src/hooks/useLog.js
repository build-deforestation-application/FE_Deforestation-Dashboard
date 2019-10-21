/* eslint-disable no-console */

import { useEffect } from 'react';

export default (hook, message = '') => {
  const result = hook();
  useEffect(() => {
    console.log(`${message}: ${result}`);
  });
  return result;
};
