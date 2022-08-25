import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import PrivateRoute from './components/private-route/private-route';
import { AppRoute, AuthorizationStatus } from './const';
import Favorites from './pages/favorites/favorites';
import Login from './pages/login/login';
import Main from './pages/main/main';
import NotFound from './pages/not-found/not-found';
import Offer from './pages/offer/offer';
import {places} from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';
import { cities } from './mocks/cities';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main places = {places} cities={cities}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Room}
            element={<Offer />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites places = {places} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
