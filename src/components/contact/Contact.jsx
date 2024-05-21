import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div className={css.contactItem}>
      <div>
        <p className={css.contactItemText}>
          <FaPhoneAlt /> {contact.name}
        </p>
        <p className={css.contactItemText}>
          <IoPerson /> {contact.number}
        </p>
      </div>
      <button
        type="button"
        className={css.contactBtn}
        onClick={() => removeContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
