import { Link } from 'react-router-dom';
import FavoriteCardList from '../../components/favorite-card-list/favorite-card-list';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadFavoriteList } from '../../store/api-actions';

export default function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(loadFavoriteList());
  const favorites = useAppSelector((state) => state.favorites);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteCardList places={favorites}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="header__logo-link header__logo-link--active" to="/#">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}
