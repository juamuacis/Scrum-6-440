import classes from './SellingItems.module.css';
import Card from '../ui/Card';
import { useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

function SellingItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);


    function toggleFavoriteStatusHandler() {
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id);
        }
        else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                price: props.price
            });
        }
    }

    return (
        <li className = {classes.item}>
            <Card>
            <div className={classes.image}>
                <img src = {props.image} alt = {props.title}/>
            </div>
            <div className = {classes.content}>
                <h3>{props.title}</h3>
 
                <p>{props.description}</p>

                <h3>{'$' + props.price}</h3>
            </div>
            <div className={classes.actions}>
                <button onClick = { toggleFavoriteStatusHandler}> {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites' } </button>
            </div>
            </Card>
        </li>
    );
}

export default SellingItem;