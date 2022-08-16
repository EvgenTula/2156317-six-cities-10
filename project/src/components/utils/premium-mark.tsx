import { Place } from '../../types/place';

interface IPremiumMarkProps {
    place: Place
}

export default function PremiumMark({ place }: IPremiumMarkProps): JSX.Element | null {
  return (
    place.isPremium ? <div className='place-card__mark'><span>Premium</span></div> : null
  );
}
