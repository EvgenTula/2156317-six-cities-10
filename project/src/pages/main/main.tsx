import CardList from '../../components/card-list/card-list';
import Header from '../../components/header/header';
import { City, Location, Place } from '../../types/place';
import Map from '../../components/map/map';
import LocationList from '../../components/location-list/location-list';
import { useState } from 'react';

type MainProps = {
    places : Place[];
    cities : City[];
    city : City;
}

export default function Main({places, cities, city}: MainProps): JSX.Element {
  const cityPlaces = places.filter((place) => place.city.name === city.name);
  const [selectedLocation, setSelectedLocation] = useState<Location | undefined>(undefined);
  const handlePlace = (hoveredPlace: number | null) => {
    if (hoveredPlace === null) {
      setSelectedLocation(undefined);
    } else {
      const currentOffer = places.find((place) => place.id === hoveredPlace);
      setSelectedLocation(currentOffer?.location);
    }
  };

  return (
    <>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList cities={cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityPlaces.length} places to stay in {city.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardList places = {cityPlaces} onPlaceHover = {handlePlace} />
            </section>
            <div className="cities__right-section">
              <Map
                city={city}
                places={places}
                currentLocation={selectedLocation}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
