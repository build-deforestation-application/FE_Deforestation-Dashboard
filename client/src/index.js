import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './reducers';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
