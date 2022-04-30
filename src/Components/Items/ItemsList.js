
import SellingItems from './SellingItems'
import classes from './ItemsList.module.css'

function ItemList(props) {
    return <ul className={classes.list}
>
    {props.items.map(item => 
    <SellingItems 
    key={item.id} 
    id = {item.id} 
    title = {item.title}
    image = {item.image}
    description = {item.description}
    price = {item.price}
     />)}
</ul>}

export default ItemList;