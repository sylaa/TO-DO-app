import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import styles from './ListForm.module.scss';
import Button from '../Button/Button';

const ListForm = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  const info = () => {
    console.log('it works');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <span className={styles.span}>Title:</span>{' '}
      <input
        className={styles.formListInput}
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className={styles.span}>Description:</span>{' '}
      <input
        className={styles.formListInput}
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onSubmit={info}>Add list</Button>
    </form>
  );
};

export default ListForm;
