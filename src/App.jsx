import './App.css';

import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/authOps';
import { Routes, Route } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/registrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/contactsPage/ContactsPage'));

import Loader from './components/loader/Loader';

import { authSelectors } from './redux/auth/selectors';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute
            retirectTo="/contacts"
            component={<RegistrationPage />}
          />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute retirectTo="/contacts" component={<LoginPage />} />
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute retirectTo="/login" component={<ContactsPage />} />
        }
      />
    </Routes>
  );
}

export default App;
