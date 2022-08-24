import {Place} from '../types/place';

export const places: Place[] = [
  {
    id : 1,
    name : 'Beautiful & luxurious apartment at great location',
    price : 120,
    rentDescr : 'night',
    rating : 80,
    type : 'Apartment',
    img : 'img/apartment-01.jpg',
    stars : 4.5,
    bedrooms : 3,
    adults : 1,
    options : [ 'wi-fi', 'Kitchen' ],
    owner : { name: 'Angelina-1', img : 'img/avatar-angelina.jpg', descr : 'hate people' },
    isPremium : false,
    isFavorite : false,
    city : {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location : {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
  {
    id : 2,
    name : 'Wood and stone place',
    price : 80,
    rentDescr : 'night',
    rating : 80,
    type : 'Private room',
    img : 'img/room.jpg',
    stars : 3,
    bedrooms : 8,
    adults : 50,
    options : [ 'wi-fi', 'Kitchen', 'Fridge' ],
    owner : { name: 'Angelina-2', img : 'img/avatar-angelina.jpg', descr : 'like people' },
    isPremium : true,
    isFavorite : false,
    city : {
      name: 'Amsterdam',
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      }
    },
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    }
  },
  {
    id : 3,
    name : 'Canal View Prinsengracht',
    price : 132,
    rentDescr : 'night',
    rating : 80,
    type : 'Apartment',
    img : 'img/apartment-02.jpg',
    stars : 1,
    bedrooms : 3,
    adults : 2,
    options : [ 'wi-fi', 'Kitchen', 'Fridge' ],
    owner : { name: 'Angelina-3', img : 'img/avatar-angelina.jpg', descr : 'noraml' },
    isPremium : false,
    isFavorite : true,
    city : {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    }
  },
  {
    id : 4,
    name : 'Super Canal Prinsengracht',
    price : 900,
    rentDescr : 'night',
    rating : 90,
    type : 'Apartment',
    img : 'img/apartment-02.jpg',
    stars : 1,
    bedrooms : 3,
    adults : 2,
    options : [ 'wi-fi', 'Kitchen', 'Fridge', 'beer' ],
    owner : { name: 'Angelina-3', img : 'img/avatar-angelina.jpg', descr : 'noraml' },
    isPremium : false,
    isFavorite : true,
    city : {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    }
  },
  {
    id : 5,
    name : 'Prinsengracht',
    price : 20,
    rentDescr : 'night',
    rating : 40,
    type : 'Apartment',
    img : 'img/apartment-02.jpg',
    stars : 1,
    bedrooms : 3,
    adults : 2,
    options : [ 'hot water' ],
    owner : { name: 'Angelina-3', img : 'img/avatar-angelina.jpg', descr : 'noraml' },
    isPremium : false,
    isFavorite : true,
    city : {
      name: 'Brussels',
      location: {
        latitude: 35.35514938496378,
        longitude: 5.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 35.35514938496378,
      longitude: 5.673877537499948,
      zoom: 8
    }
  }
];
