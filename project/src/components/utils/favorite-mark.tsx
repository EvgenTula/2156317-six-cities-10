import { useAppDispatch } from '../../hooks';
import { changeFavoriteList } from '../../store/api-actions';
import { Place } from '../../types/place';

interface FavoriteMarkProps {
    place: Place;
}

export default function FavoriteMark({ place }: FavoriteMarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    place.isFavorite ?
      (
        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(changeFavoriteList({hotelId : place.id, status : 0}));}}
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>) : (
        <button className="place-card__bookmark-button button" type="button"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(changeFavoriteList({hotelId : place.id, status : 1}));}}
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>)
  );


}
