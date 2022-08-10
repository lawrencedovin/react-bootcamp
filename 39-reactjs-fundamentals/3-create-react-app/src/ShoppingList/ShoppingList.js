import './ShoppingList.css';
import items from '../items';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

function ShoppingList() {
  return (
    <ul>
      {items.map(item => 
        <ShoppingItem item={item} />
      )}
    </ul>
  );
}

export default ShoppingList;
