import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Place } from '../../types/place';
import Raiting from '../raiting/rating';
import FavoriteMark from '../utils/favorite-mark';
import PremiumMark from '../utils/premium-mark';

type FavoriteCardPalceProps = {
    place: Place;
}

export default function FavoriteCardPalce({ place }: FavoriteCardPalceProps): JSX.Element {
  return (
    <article key={place.id} className="favorites__card place-card">
      <PremiumMark place={place}/>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={place.previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteMark place={place}/>
        </div>
        <Raiting rating={place.rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.RoomDefault}${place.id}`} state = {place}>{place.title}</Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}
