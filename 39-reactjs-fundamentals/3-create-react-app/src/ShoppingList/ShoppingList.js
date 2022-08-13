import './ShoppingList.css';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import total from '../utils/ShoppingFunctions';

function ShoppingList({items, username}) {
  return (
    <>
      <h1>{username}'s Shopping List</h1>
      <ul>
        {items.map(item => 
          <ShoppingItem id={item.id} name={item.name} image={item.img} 
                        price={item.price} quantity={item.qty} 
          />
        )}
      </ul>
      <br />
      <h2>Total Shopping List Price: ${total(items)}</h2>
    </>
  );
}

export default ShoppingList;
