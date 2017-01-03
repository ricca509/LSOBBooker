import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import Page from './containers/AvailabilityPage/Page';
import store from './stores/availabilityStore';
import { startRouter } from './router';

startRouter(store);

render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
);
