import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { register } from '../../redux/auth/operations';

import css from './RegistrationForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long!')
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
    <div className={css.registrationFormContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.registrationForm}>
          <div className={css.registrationInputContainer}>
            <label htmlFor={nameFieldId} className={css.registrationFormLabel}>
              Username
            </label>
            <Field
              className={css.registrationFormInput}
              id={nameFieldId}
              type="text"
              name="name"
              placeholder="Username..."
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.registrationFormSpan}
            />
          </div>
          <div className={css.registrationInputContainer}>
            <label htmlFor={emailFieldId} className={css.registrationFormLabel}>
              Email
            </label>
            <Field
              className={css.registrationFormInput}
              id={emailFieldId}
              type="email"
              name="email"
              placeholder="Email..."
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css.registrationFormSpan}
            />
          </div>
          <div className={css.registrationInputContainer}>
            <label
              htmlFor={passwordFieldId}
              className={css.registrationFormLabel}
            >
              Password
            </label>
            <Field
              className={css.registrationFormInput}
              id={passwordFieldId}
              type="password"
              name="password"
              placeholder="Password..."
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.registrationFormSpan}
            />
          </div>
          <div>
            <button type="submit" className={css.registrationFormBtn}>
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
