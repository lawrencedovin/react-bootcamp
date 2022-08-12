import './ShoppingList.css';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

function ShoppingList({items}) {
  return (
    <ul>
      {items.map(item => 
        <ShoppingItem item={item} />
      )}
    </ul>
  );
}

export default ShoppingList;
