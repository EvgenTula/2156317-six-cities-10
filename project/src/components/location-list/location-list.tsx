import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeCity } from '../../store/action';
import { City } from '../../types/place';
import LocationItem from '../location-item/location-item';

type LocationListProps = {
  cities: City[];
}

export default function LocationList({ cities }: LocationListProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleSelectCity = (currentCity: City) => {
    dispatch(changeCity(currentCity));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <LocationItem
          key={city.name}
          city={city}
          selectedCity={selectedCity}
          onSelectCity={handleSelectCity}
        />
      ))}
    </ul>
  );
}
