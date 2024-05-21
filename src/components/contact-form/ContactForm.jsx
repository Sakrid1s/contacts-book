import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contacts/operations';

const AddUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long!')
    .max(50, 'Name must be less then 50 characters long!')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters long!')
    .max(50, 'Number must be less then 50 characters long!')
    .required('Number is required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    const newContact = {
      name,
      number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameFieldId} className={css.formLabel}>
          <div className={css.formLabelContainer}>
            <p className={css.formLabelText}>Name</p>
            <Field
              id={nameFieldId}
              name="name"
              className={css.formInput}
              placeholder="Name..."
            />
          </div>
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label htmlFor={numberFieldId} className={css.formLabel}>
          <div className={css.formLabelContainer}>
            <p className={css.formLabelText}>Number</p>
            <Field
              type="text"
              id={numberFieldId}
              name="number"
              className={css.formInput}
              placeholder="Number..."
            />
          </div>
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
