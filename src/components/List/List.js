import styles from './List.module.scss';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { useSelector } from 'react-redux';

const List = () => {
  const columns = useSelector((state) => state.columns);
  // {
  //     id: 1,
  //     title: 'Books',
  //     icon: 'book',
  //     cards: [
  //       { id: 1, title: 'This is Going to Hurt' },
  //       { id: 2, title: 'Interpreter of Maladies' },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: 'Movies',
  //     icon: 'film',
  //     cards: [
  //       { id: 1, title: 'Harry Potter' },
  //       { id: 2, title: 'Star Wars' },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: 'Games',
  //     icon: 'gamepad',
  //     cards: [
  //       { id: 1, title: 'The Witcher' },
  //       { id: 2, title: 'Skyrim' },
  //     ],
  //   },
  // ]);

  // setColumns(columnsUpdated);

  // };

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do<span>soon!</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column}  />
        )}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;
