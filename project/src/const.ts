import { cities } from './mocks/cities';

export const MAX_RATING = 5;
export const MAX_PERCENT = 100;

export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const DEFAULT_CITY = cities.filter((city) => city.name === 'Paris')[0];

export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Room = '/offer/:id',
    RoomDefault = '/offer/',
    DevArtist = '/dev-artist',
    NotFound = '*'
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }
