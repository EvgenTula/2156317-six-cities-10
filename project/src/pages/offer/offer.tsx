import { useParams } from 'react-router-dom';
import ImageList from '../../components/image-list/image-list';
import PropertyList from '../../components/property-list/property-list';
import Review from '../../components/review/review';
import FavoriteMark from '../../components/utils/favorite-mark';
import PremiumMark from '../../components/utils/premium-mark';
import { useAppDispatch, useAppSelector } from '../../hooks';
import NotFound from '../not-found/not-found';
import Map from '../../components/map/map';
import { Comment } from '../../types/comment';
import Header from '../../components/header/header';
import ReviewList from '../../components/review-list/review-list';
import { AuthorizationStatus } from '../../const';
import { fetchCommentsAction } from '../../store/api-actions';

type OfferProps = {
  comments : Comment[]
};

function Offer({ comments } : OfferProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { cityPlaces, authState } = useAppSelector((state) => state);
  const currentPlace = cityPlaces.find((item) => item.id === Number(id));
  if (!currentPlace) {
    return (
      <NotFound />
    );
  }
  dispatch(fetchCommentsAction(currentPlace));
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <ImageList images={currentPlace.images} type={currentPlace.type} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <PremiumMark place={currentPlace} />
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentPlace.title}
                </h1>
                <FavoriteMark place={currentPlace} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: 80}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentPlace.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentPlace.bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                            Max {currentPlace.maxAdults} adults
                </li>
              </ul>
              <PropertyList propetry={currentPlace.goods} />
              <div className="property__price">
                <b className="property__price-value">&euro;{currentPlace.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {currentPlace.host.name}
                  </span>
                  <span className="property__user-status">
                    {currentPlace.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentPlace.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewList comments={comments} />
                {authState === AuthorizationStatus.Auth ? <Review /> : ''}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city = {currentPlace.city}
              places = {cityPlaces}
              currentLocation = {currentPlace.city.location}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: 80}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;132</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: 80}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: 100}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
