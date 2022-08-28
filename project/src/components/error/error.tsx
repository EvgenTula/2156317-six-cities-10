import { useAppSelector } from '../../hooks';

export default function Error(): JSX.Element | null {
  const { error } = useAppSelector((state) => state);
  return (error)
    ? <div className='error'><h1>{error}</h1></div>
    : null;

}
