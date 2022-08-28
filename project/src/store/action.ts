import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Comment } from '../types/comment';
import { City, Place } from '../types/place';
import { UserData } from '../types/user-data';

export const changeCity = createAction<City>('changeCity');
export const loadPlaces = createAction<Place[]>('loadPlaces');
export const loadComments = createAction<Comment[]>('loadComments');
export const loadFavorites = createAction<Place[]>('loadFavorites');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setLoadedStatus = createAction<boolean>('setDataLoadedStatus');
export const setUserData = createAction<UserData>('user/setUserData');
