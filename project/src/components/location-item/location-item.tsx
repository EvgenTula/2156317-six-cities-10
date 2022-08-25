import { Link } from 'react-router-dom';
import { City } from '../../types/place';

type LocationItemProps = {
  city: City;
  selectedCity: City;
  onSelectCity: (city: City) => void;
}

export default function LocationItem({city, selectedCity, onSelectCity}: LocationItemProps): JSX.Element {
  const isSelected = selectedCity.name === city.name ? 'tabs__item--active' : null;
  return (
    <li className="locations__item" onClick={() => { onSelectCity(city); }}>
      <Link className={`locations__item-link tabs__item ${isSelected}`} to="/#">
        <span>{city.name}</span>
      </Link>
    </li>
  );
}
