import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/sliceFilter';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <label>
      <input
        type="text"
        name="filter"
        onChange={inputFilterChange}
        placeholder=" Find contacts by name"
      />
    </label>
  );
};
