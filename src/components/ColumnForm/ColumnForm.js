import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId: props.listId }));
    setTitle('');
    setIcon('');
  };

  const info = () => {
    console.log('it works');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span className={styles.span}>Title:</span>{' '}
      <input
        className={styles.columnFormInput}
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className={styles.span}>Icon:</span>{' '}
      <input
        className={styles.columnFormInput}
        type='text'
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button onSubmit={info}>Add column</Button>
    </form>
  );
};

export default ColumnForm;
