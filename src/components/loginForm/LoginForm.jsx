import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { logIn } from '../../redux/auth/operations';

import css from './LoginForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long!')
    .max(50, 'Password must be less then 50 characters long!')
    .required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();

  const handleSubmit = async (values, actions) => {
    const { email, password } = values;
    const logInUser = {
      email,
      password,
    };
    try {
      await dispatch(logIn(logInUser));
      actions.resetForm();
    } catch (error) {
      console.error('Помилка реєстрації:', error);
    }
  };

  return (
    <div className={css.logInFormContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.logInForm}>
          <div className={css.logInInputContainer}>
            <label htmlFor={emailFieldId} className={css.logInInputLabel}>
              Email
            </label>
            <Field
              className={css.logInInput}
              id={emailFieldId}
              type="email"
              name="email"
              placeholder="Email..."
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css.logInInputSpan}
            />
          </div>
          <div className={css.logInInputContainer}>
            <label htmlFor={passwordFieldId} className={css.logInInputLabel}>
              Password
            </label>
            <Field
              className={css.logInInput}
              id={passwordFieldId}
              type="password"
              name="password"
              placeholder="Password..."
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.logInInputSpan}
            />
          </div>
          <div>
            <button type="submit" className={css.logInFormBtn}>
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
