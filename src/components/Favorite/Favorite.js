// import NavBar from '../NavBar/NavBar';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../redux/store';


const Favorite = () => {

  const cards = useSelector(state => getFavorites(state));

  return (
      <>
        <PageTitle>FAVORITE</PageTitle>
        <section className={styles.column}>
          <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
          </ul>
        </section>        
      </>
  )
};

export default Favorite;
