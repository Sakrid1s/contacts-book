// import Container from '../../components/container/Container';
import DocumentTitle from '../../components/documentTitle/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      {/* <Container> */}
      <div className={css.HomePageContainer}>
        <h1 className={css.title}>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
      {/* </Container> */}
    </>
  );
};

export default HomePage;
