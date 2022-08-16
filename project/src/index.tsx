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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main places = {places}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Offer place = {places[0]}/>}
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
  </React.StrictMode>
);
