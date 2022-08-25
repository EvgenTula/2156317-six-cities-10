import { createAction } from '@reduxjs/toolkit';
import { City, Place } from '../types/place';

export const changeCity = createAction<{ currentCity: City }>('changeCity');
export const loadPlaces = createAction<{ currentPlaces: Place[] }>('loadPlaces');
