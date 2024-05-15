import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOps';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .max(50, 'Password must be less then 50 characters long!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const userNameFieldId = nanoid();
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();
  const confirmPasswordFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    const { username, email, password, confirmPassword } = values;
    const registerUser = {
      username,
      email,
      password,
      confirmPassword,
    };
    console.log(registerUser);
    dispatch(register(registerUser));
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
          <label htmlFor={userNameFieldId}>Username</label>
          <Field
            id={userNameFieldId}
            type="text"
            name="username"
            placeholder="Username..."
          />
          <ErrorMessage name="username" component="span" />
        </div>
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
          <label htmlFor={confirmPasswordFieldId}>Confirm Password</label>
          <Field
            id={confirmPasswordFieldId}
            type="password"
            name="confirmPassword"
            placeholder="Confirm password..."
          />
          <ErrorMessage name="confirmPassword" component="span" />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
