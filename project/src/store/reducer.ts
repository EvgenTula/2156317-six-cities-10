import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadPlaces, requireAuthorization, setLoadedStatus, setError, setUserData, loadComments, loadFavorites } from './action';
import { City, Place } from '../types/place';
import { UserData } from '../types/user-data';
import { Comment } from '../types/comment';

type InitalStateType = {
  city: City;
  cityPlaces: Place[];
  authState: AuthorizationStatus;
  error: string | null;
  isLoaded: boolean;
  userData: UserData | null;
  comments : Comment[];
  favorites : Place[];
}

const initialState : InitalStateType = {
  city: DEFAULT_CITY,
  cityPlaces: [],
  authState: AuthorizationStatus.Unknown,
  error: null,
  isLoaded: false,
  userData: null,
  comments: [],
  favorites: []
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
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
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
