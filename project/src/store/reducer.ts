import { DEFAULT_CITY } from '../const';
import { places } from '../mocks/offers';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadPlaces } from './action';

const initialState = {
  city: DEFAULT_CITY,
  cityPlaces: places
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { currentCity } = action.payload;
      state.city = currentCity;
    })
    .addCase(loadPlaces, (state, action) => {
      const { currentPlaces } = action.payload;
      state.cityPlaces = currentPlaces;
    });
});
