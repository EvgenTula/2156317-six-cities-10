import {MAX_RATING, MAX_PERCENT} from '../../const';


type RaitingProps = {
    rating: number
}

export default function Raiting({rating}: RaitingProps) : JSX.Element {
  const ratingInPercent = Math.round(rating) * MAX_PERCENT / MAX_RATING;
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${ratingInPercent}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
