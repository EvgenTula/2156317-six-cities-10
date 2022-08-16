import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';

export default function NotFound(): JSX.Element {
  return (
    <>
      <Logo />
      <h1>404</h1>
      <small>Page not found</small>
      <Link to={AppRoute.Main}>
                Go to main page
      </Link>
    </>
  );
}
