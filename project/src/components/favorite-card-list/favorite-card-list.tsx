import { Link } from 'react-router-dom';
import { Place } from '../../types/place';
import FavoriteCardPalce from '../favorite-card-place/favorite-card-palce';

type FavoriteCardListProps = {
  places: Place[];
};

export default function FavoriteCardList({ places }: FavoriteCardListProps): JSX.Element {
  const favoritePlacesCity = Array.from(new Set(places.map((place) => place.city.name)));
  return (
    <ul className="favorites__list">
      {favoritePlacesCity.map((city): JSX.Element => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/#">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {places
              .filter((place) => city === place.city.name)
              .map((place) => <FavoriteCardPalce key={place.id} place={place} />)}
          </div>
        </li>
      ))}
    </ul>
  );
}
