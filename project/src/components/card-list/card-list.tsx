import CardPlace from '../card-place/card-place';
import { Place } from '../../types/place';
import { useState } from 'react';

type CardListProps = {
  places: Place[];
};

export default function CardList({ places }: CardListProps): JSX.Element {
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
            }
          }}
          onMouseLeave={() => {
            setSelected(null);
          }}
        />
      ))}
    </div>
  );
}
