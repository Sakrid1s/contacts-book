import Container from '../../components/container/Container';
import DocumentTitle from '../../components/documentTitle/DocumentTitle';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <Container>
      <DocumentTitle>Register</DocumentTitle>
      <RegistrationForm />
    </Container>
  );
};

export default RegistrationPage;
