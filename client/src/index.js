import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RightSidebar from './components/sidebar/RightSidebar';

import store from './reducers';

import App from './App';

render(
  <Provider store={store}>
    <RightSidebar />
  </Provider>,
  document.getElementById('root'),
);
