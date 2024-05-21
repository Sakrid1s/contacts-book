import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/contactsSlice';
import { contactsSelectors } from '../../redux/contacts/selectors';

import Contact from '../contact/Contact';
import Loader from '../loader/Loader';
import ErrorMessage from '../error/ErrorMessage';

import css from './ContactList.module.css';

const ContactList = () => {
  const { isError, isLoading } = useSelector(contactsSelectors.selectContact);
  const contactsFilter = useSelector(selectFilteredContacts);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={isError} />}
      {contactsFilter.length > 0 ? (
        <div className={css.contactList}>
          {contactsFilter.map(contact => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </div>
      ) : (
        <p className={css.contactListError}>There are no contacts</p>
      )}
    </>
  );
};

export default ContactList;
