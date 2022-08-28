import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadPlaces, requireAuthorization, setLoadedStatus, setError, setUserData } from './action';
import { City, Place } from '../types/place';
import { UserData } from '../types/user-data';

type InitalStateType = {
  city: City;
  cityPlaces: Place[];
  authState: AuthorizationStatus;
  error: string | null;
  isLoaded: boolean;
  userData: UserData | null;
}

const initialState : InitalStateType = {
  city: DEFAULT_CITY,
  cityPlaces: [],
  authState: AuthorizationStatus.Unknown,
  error: null,
  isLoaded: false,
  userData: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadPlaces, (state, action) => {
      state.cityPlaces = action.payload;
    })
    .addCase(setLoadedStatus, (state, action) => {
      state.isLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authState = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
