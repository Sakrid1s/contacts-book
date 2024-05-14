import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import { useSelector } from 'react-redux';
import AuthNav from '../authNav/AuthNav';
import { authSelectors } from '../../redux/auth/selectors';
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
