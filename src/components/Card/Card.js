import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();

    const checkFavorite = () => {
        dispatch(toggleFavorite(props.id));
    }

    const remove = () => {
        dispatch(removeCard(props.id))
    }



    return (
        <li className={styles.card}>{props.title}
            <div>
                <button onClick={checkFavorite} className={clsx('fa fa-star-o' , styles.button, props.isFavorite && styles.isFavorite)}></button>
                <button onClick={remove} className={clsx('fa fa-trash', styles.button)} />
            </div>
        </li>
    );
};

export default Card;