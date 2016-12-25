import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import PageContainer from './containers/AvailabilityPage/PageContainer';
import store from './store';

render(
  <Provider store={store}>
    <PageContainer />
  </Provider>,
  document.getElementById('root')
);
