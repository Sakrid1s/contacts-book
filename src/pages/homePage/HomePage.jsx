import DocumentTitle from '../../components/documentTitle/DocumentTitle';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.HomePageContainer}>
        <h1 className={css.title}>
          Contacts book welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <div className={css.linksContainer}>
          <a
            href="https://github.com/Sakrid1s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={css.linkWrapper}>
              <FaGithub className={css.icon} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/vitalii-bilinets/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={css.linkWrapper}>
              <FaLinkedin className={css.icon} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
