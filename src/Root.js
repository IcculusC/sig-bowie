import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import CssBaseline from 'material-ui/CssBaseline';

import { configureStore } from './configureStore';
import { App } from './App';


const { store, persistor } = configureStore();

export const Root = () => (
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <CssBaseline />
      <App />
    </PersistGate>
  </Provider>
)
