import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchPlacesAction } from './store/api-actions';
import App from './components/app/app';
import { Cities } from './const';
import Error from './components/error/error';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchPlacesAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error />
      <App cities={Cities} />
    </Provider>
  </React.StrictMode>
);
