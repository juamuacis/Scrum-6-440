
import { useNavigate } from 'react-router-dom';
import NewItemForm from "../Components/Items/NewItemForm";

function NewItem() {

  const navigate = useNavigate();
  function addItemHandler(itemData) {
    
    fetch('https://csuf-online-shop-default-rtdb.firebaseio.com/items.json',
      {
        method: 'POST',
        body: JSON.stringify(itemData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(()=> {
      navigate('/Home', {replace: true});
    });

    }
    

  return (
    <div >
      <h1>Add a new Item</h1>
      <NewItemForm onAddItem={addItemHandler} />

    </div>
  )
};

export default NewItem;