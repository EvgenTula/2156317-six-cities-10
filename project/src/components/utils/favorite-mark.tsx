import { Place } from '../../types/place';

interface IFavoriteMarkProps {
    place: Place;
}

export default function FavoriteMark({ place }: IFavoriteMarkProps): JSX.Element {
  return (
    place.isFavorite ?
      (
        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>) : (
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>)
  );


}
