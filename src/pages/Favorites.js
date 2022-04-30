import React from 'react'
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import ItemList from '../Components/Items/ItemsList';

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if(favoritesCtx.totalFavorites === 0){
    content = <p>Add items to your favorites!</p>

  }
  else{
    content = <ItemList items = {favoritesCtx.favorites}/>
  }

  return (
    <div style = { {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
    } }>
        {content}
    </div>
  )
}

export default Favorites