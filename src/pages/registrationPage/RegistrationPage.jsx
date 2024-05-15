import Section from '../../components/section/Section';
import Container from '../../components/container/Container';
import DocumentTitle from '../../components/documentTitle/DocumentTitle';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <Section>
      <Container>
        <DocumentTitle>Register</DocumentTitle>
        <RegistrationForm />
      </Container>
    </Section>
  );
};

export default RegistrationPage;
