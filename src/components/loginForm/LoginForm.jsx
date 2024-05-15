import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import css from './LoginForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
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

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    const logInUser = {
      email,
      password,
    };

    console.log(dispatch(logInUser));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            id={emailFieldId}
            type="email"
            name="email"
            placeholder="Email..."
          />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
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
          <button type="submit">LogIn</button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
