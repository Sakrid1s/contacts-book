import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/filtersSlice';
import { filtersSelectors } from '../../redux/filters/selectors';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filtersSelectors.selectNameFilter);

  const handleFilterUsers = event => {
    const newFilter = event.target.value;
    const action = changeFilter(newFilter);
    dispatch(action);
  };

  return (
    <div className={css.searchBoxContainer}>
      <label className={css.searchBoxContainerLabel}>
        <h2 className={css.searchBoxContainerText}>Find contacts by name</h2>
        <input
          className={css.searchBoxInput}
          type="text"
          placeholder="Search contact..."
          value={filter}
          onChange={handleFilterUsers}
        />
      </label>
    </div>
  );
};

export default SearchBox;
