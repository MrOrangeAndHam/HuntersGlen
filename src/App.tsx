import React from 'react';
import {Home} from './Home';
import {Provider} from 'react-redux';
import {appStore} from './AppStore';

export const App = () => (
  <Provider store={appStore}>
    <Home />
  </Provider>
);
