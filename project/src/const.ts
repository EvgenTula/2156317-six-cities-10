import { City } from './types/place';
import leaflet from 'leaflet';

export const MAX_RATING = 5;
export const MAX_PERCENT = 100;

const URL_MARKER_DEFAULT = '../img/pin.svg';
const URL_MARKER_CURRENT = '../img/pin-active.svg';

export const DefaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

export const SelectedIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});


export const BACKEND_URL = 'https://10.react.pages.academy/six-cities';
export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'six-sities-token';

export const MAX_IMAGES_COUNT = 6;

export const ERROR_TIMEOUT = 5000;

export enum ApiRoute {
    Places = '/hotels',
    Login = '/login',
    Logout = '/logout',
    Comments = '/comments/',
    Favorites = '/favorite'
  }

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

export const Cities : City[] = [
  {
    location: {
      latitude:  48.853410,
      longitude: 2.348800,
      zoom: 13
    },
    name: 'Paris',
  },
  {
    location: {
      latitude:  50.935173,
      longitude: 6.961899,
      zoom: 13
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude:  50.8503396,
      longitude: 4.351710,
      zoom: 13
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude:  52.377956,
      longitude: 4.897070,
      zoom: 13
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude:  53.551086,
      longitude: 9.993682,
      zoom: 13
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude:  51.233334,
      longitude: 6.773455,
      zoom: 13
    },
    name: 'Dusseldorf',
  }
];

export const DEFAULT_CITY = Cities.find((city) => city.name === 'Paris') ?? Cities[0];
