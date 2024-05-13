import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from './redux/auth/selectors';

const RestrictedRoute = ({ component: Component, retirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={retirectTo} /> : Component;
};

export default RestrictedRoute;
