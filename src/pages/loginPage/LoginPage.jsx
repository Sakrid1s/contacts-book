import Section from '../../components/section/Section';
import Container from '../../components/container/Container';
import LoginForm from '../../components/loginForm/LoginForm';
import DocumentTitle from '../../components/documentTitle/DocumentTitle';

const LoginPage = () => {
  return (
    <Section>
      <Container>
        <DocumentTitle>Log In</DocumentTitle>
        <LoginForm />
      </Container>
    </Section>
  );
};

export default LoginPage;
