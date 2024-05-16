import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'Password must be less then 50 characters long!'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();

  const handleSubmit = async (values, actions) => {
    const { name, email, password } = values;
    try {
      await dispatch(
        register({
          name,
          email,
          password,
        })
      );
      actions.resetForm();
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.registrationFormContainer}>
        <div className={css.registrationInput}>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            id={nameFieldId}
            type="text"
            name="name"
            placeholder="Username..."
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.registrationInput}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            id={emailFieldId}
            type="email"
            name="email"
            placeholder="Email..."
          />
          <ErrorMessage name="email" component="span" />
        </div>
        <div className={css.registrationInput}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            id={passwordFieldId}
            type="password"
            name="password"
            placeholder="Password..."
          />
          <ErrorMessage name="password" component="span" />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
