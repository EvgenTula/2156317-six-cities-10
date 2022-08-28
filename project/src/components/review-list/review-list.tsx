import { Comment } from '../../types/comment';
import Raiting from '../raiting/rating';

type ReviewListProps = {
  comments: Comment[];
}

export default function ReviewList({ comments }: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <li key={comment.id} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">{comment.user.name}</span>
          </div>
          <div className="reviews__info">
            <Raiting rating={comment.rating} />
            <p className="reviews__text">{comment.comment}</p>
            <time className="reviews__time" dateTime="2019-04-24">{comment.date}</time>
          </div>
        </li>
      ))}
    </ul>
  );
}
