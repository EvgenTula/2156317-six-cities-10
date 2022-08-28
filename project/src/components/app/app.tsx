import { Route, BrowserRouter, Routes } from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Offer from '../../pages/offer/offer';
import { useAppSelector } from '../../hooks';
import { City } from '../../types/place';
import Loading from '../../pages/spinner/lds-spinner';

type AppScreenProps = {
  cities: City[];
}

export default function App({ cities }: AppScreenProps): JSX.Element {
  const { city, cityPlaces, authState, isLoaded, comments } = useAppSelector((state) => state);
  if (authState === AuthorizationStatus.Unknown || isLoaded) {
    return (
      <Loading />
    );
  }
  return (

    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main places = {cityPlaces} cities={cities} city = {city}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Offer comments={comments}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authState}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>

  );
}
