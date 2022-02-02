import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/store';

// const SearchForm = () => {
//   // const [title, setTitle] = useState('');
//   const [searchString, setSearchString] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // dispatch (updateSearchString({ title }));
//     // dispatch(updateSearchString(searchString));
//     dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchString });
//     setSearchString('')
//   };
const SearchForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSearchString(title));
    dispatch({
      type: 'UPDATE_SEARCHSTRING',
      payload: title,
    });
  }, [dispatch, title]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(title));
    dispatch({
      type: 'UPDATE_SEARCHSTRING',
      payload: title,
    });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Search...'
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
