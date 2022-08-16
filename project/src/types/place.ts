export type City =
{
    name : string;
    location: {
        latitude: number;
        longitude: number;
        zoom: number;
    }
}

export type Owner = {
    name : string;
    img : string;
    descr : string;
  }

export type Place = {
    id : number;
    name : string;
    price : number;
    rentDescr : string;
    rating : number;
    type : string;
    img : string;
    stars : number;
    bedrooms : number;
    adults : number;
    options : string[];
    owner : Owner;
    isPremium : boolean;
    isFavorite : boolean;
    city : City;
  }

