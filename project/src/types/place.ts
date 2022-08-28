export type City =
{
    name : string;
    location: Location;
}

export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
  };

export type Owner = {
    id: number;
    isPro: boolean;
    name : string;
    avatarUrl : string;
  }

export type Place = {
    id : number;
    title : string;
    price : number;
    description : string;
    rating : number;
    type : string;
    previewImage : string,
    images : string[];
    stars : number;
    bedrooms : number;
    maxAdults : number;
    goods : string[];
    host : Owner;
    isPremium : boolean;
    isFavorite : boolean;
    city : City;
    location : Location;
  }

