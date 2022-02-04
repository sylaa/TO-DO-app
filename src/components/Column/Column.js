import Card from '../Card/Card.js';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';

const Column = props => {
  const cards = useSelector(
    state => getFilteredCards(state, props.id));

  return (
    <section className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />)}
      </ul>
      <CardForm columnId={props.id} 
      // action={props.action} 
      />

    </section>
  );
};

export default Column;
