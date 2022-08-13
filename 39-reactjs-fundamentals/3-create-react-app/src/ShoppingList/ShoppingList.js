import './ShoppingList.css';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

function ShoppingList({items}) {
  return (
    <ul>
      {items.map(item => 
        <ShoppingItem id={item.id} name={item.name} image={item.img} 
                      price={item.price} quantity={item.qty} 
        />
      )}
    </ul>
  );
}

export default ShoppingList;
