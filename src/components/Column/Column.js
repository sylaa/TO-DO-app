import styles from './Column.module.scss';

const Column = (props) => {
  return (
    <section className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
    </section>
  );
};

export default Column;
