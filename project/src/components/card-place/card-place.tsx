import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Place } from '../../types/place';
import { MouseEventHandler } from 'react';
import FavoriteMark from '../utils/favorite-mark';
import PremiumMark from '../utils/premium-mark';
import Raiting from '../raiting/rating';


type CardPlaceProps = {
  place : Place;
  onMouseOver?: MouseEventHandler<HTMLElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLElement> | undefined;
}

export default function CardPlace({place, onMouseOver, onMouseLeave} : CardPlaceProps) {
  return (
    <article onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className="cities__card place-card">
      <PremiumMark place={place}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.RoomDefault + place.id} state = {place}>
          <img className="place-card__image" src={place.img} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{place.rentDescr}</span>
          </div>
          <FavoriteMark place={place}/>
        </div>
        <Raiting rating={place.rating}/>
        <h2 className="place-card__name">
          <Link to={AppRoute.RoomDefault + place.id}>{place.name}</Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}
