import { PropagateLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <PropagateLoader color="#e51a2c" />;
    </div>
  );
};

export default Loader;
