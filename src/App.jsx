import './App.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/authOps';

import SearchBox from './components/search-box/SearchBox';
import ContactForm from './components/contact-form/ContactForm';
import ContactList from './components/contact-list/ContactList';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
