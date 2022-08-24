import React, { ChangeEvent } from 'react';

function SetStars({onChange, initialValue}: {onChange: (value: number) => void, initialValue: number }): JSX.Element {
  const starsValues = [ 'perfect', 'good', 'not bad', 'badly', 'terribly'];
  const stars = starsValues.map((value, index) => {
    const id = `${index}-stars`;
    return (
      <>
        <input onChange={(e) => {
          if(e.target.checked) {
            onChange(index);
          }
        }}
        className="form__rating-input visually-hidden" name="rating" id={id} type="radio" value="" checked = {index === initialValue}
        />
        <label htmlFor={id} className="reviews__rating-label form__rating-label" title={value}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </>
    );
  });
  return (
    <div className="reviews__rating-form form__rating">
      {stars}
    </div>
  );
}

export default function Review(): JSX.Element {
  const [data, setData] = React.useState({
    rating: 0,
    review: '',
  });

  const starsChange = (value: number) => {
    setData((last) => ({ ...last, rating: value }));
  };

  const reviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setData((last) => ({ ...last, review: evt.target.value }));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <SetStars onChange={starsChange} initialValue={data.rating}/>
      <textarea onChange={reviewChange} className="reviews__textarea form__textarea" id="review" name="review" value={data.review} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
