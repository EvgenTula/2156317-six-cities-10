import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute, AuthorizationStatus, ERROR_TIMEOUT } from '../const';
import { Place } from '../types/place';
import { AppDispatch, State } from '../types/state';
import { loadPlaces, requireAuthorization, setLoadedStatus, setError, setUserData } from './action';
import { store } from '.';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';

export const fetchPlacesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadPlaces', async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Place[]>(ApiRoute.Places);
    dispatch(setLoadedStatus(true));
    dispatch(loadPlaces(data));
    dispatch(setLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/requireAuthorization',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get(ApiRoute.Login);
      dispatch(setUserData(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
    dispatch(setUserData(data));
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);
export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      ERROR_TIMEOUT,
    );
  },
);
