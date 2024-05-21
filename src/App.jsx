import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { authSelectors } from './redux/auth/selectors';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import Loader from './components/loader/Loader';
import Layout from './components/layout/Layout';

import './App.css';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/registrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/contactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
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
    </Layout>
  );
}

export default App;
