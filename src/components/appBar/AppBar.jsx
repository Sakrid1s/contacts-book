import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/selectors';

import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../authNav/AuthNav';

import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
