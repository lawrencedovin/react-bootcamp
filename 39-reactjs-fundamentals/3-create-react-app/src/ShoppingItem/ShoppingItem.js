import './ShoppingItem.css';

function ShoppingItem({item}) {
  return (
      <li key={item.id}>
        <img src={item.img} alt={item.img} height="100px" />
        <p>ID: {item.id}</p>
        <p>name: {item.name}</p>
        <p>quantity: {item.qty}</p>
        <p>price: ${item.price * item.qty}</p>
      </li>
  );
}

export default ShoppingItem;
