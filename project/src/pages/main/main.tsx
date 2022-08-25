import CardList from '../../components/card-list/card-list';
import Header from '../../components/header/header';
import { City, Place } from '../../types/place';
import Map from '../../components/map/map';
import LocationList from '../../components/location-list/location-list';
import { useAppSelector } from '../../hooks';

type MainProps = {
    places : Place[]
    cities : City[]
}

export default function Main({places, cities}: MainProps): JSX.Element {
  const { city } = useAppSelector((state) => state);
  const cityPlaces = places.filter((place) => place.city.name === city.name);
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
              <CardList places = {cityPlaces} />
            </section>
            <div className="cities__right-section">
              <Map city={places[0].city} places={places} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
