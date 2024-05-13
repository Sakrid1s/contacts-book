import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from './redux/auth/selectors';

const PrivateRoute = ({ component: Component, retirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={retirectTo} />;
};

export default PrivateRoute;
