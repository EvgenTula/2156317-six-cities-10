import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Place } from '../../types/place';
import FavoriteMark from '../utils/favorite-mark';
import PremiumMark from '../utils/premium-mark';

type FavoriteCardPalceProps = {
    key: number;
    place: Place;
}

export default function FavoriteCardPalce({ key, place }: FavoriteCardPalceProps): JSX.Element {
  return (
    <article key={key} className="favorites__card place-card">
      <PremiumMark place={place}/>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={place.img} width="150" height="110" alt="Place" />
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
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.RoomDefault + place.id} state = {place}/>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}
