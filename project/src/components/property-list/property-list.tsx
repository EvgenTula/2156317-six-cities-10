import { useParams } from 'react-router-dom';
import { places } from '../../mocks/offers';

export default function PropertyList(): JSX.Element {
  const { id } = useParams();
  const place = places.filter((item) => item.id === Number(id))[0];
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {place.property.map((prop, index) => (
          <li key={place.id} className="property__inside-item">
            {prop}
          </li>
        ))}
      </ul>
    </div>
  );
}
