import CardPlace from '../card-place/card-place';
import { Place } from '../../types/place';
import { useState } from 'react';

type CardListProps = {
  places: Place[];
  onPlaceHover: (id: number | null) => void;
};

export default function CardList({ places, onPlaceHover }: CardListProps): JSX.Element {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place, index) => (
        <CardPlace
          key = {place.id}
          place = {place}
          onMouseOver={() => {
            if(selected !== index) {
              setSelected(index);
              onPlaceHover(place.id);
            }
          }}
          onMouseLeave={() => {
            setSelected(null);
            onPlaceHover(null);
          }}
        />
      ))}
    </div>
  );
}
