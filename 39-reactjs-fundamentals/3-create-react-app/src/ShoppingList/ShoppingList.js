import './ShoppingList.css';
import items from '../items';

function ShoppingList() {
  return (
    <>
      <ul>
        {items.map((item) => 
          <li key={item.id}>
            <p>ID: {item.id}</p>
            <p>name: {item.name}</p>
            <p>price: ${item.price}</p>
            <p>quantity: {item.qty}</p>
            <img src={item.img} alt={item.img} height="100px" />
          </li>
        )}
      </ul>
    </>
  );
}

export default ShoppingList;
