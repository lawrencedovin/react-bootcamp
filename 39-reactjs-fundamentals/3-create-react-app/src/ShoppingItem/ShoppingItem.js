import './ShoppingItem.css';

function ShoppingItem({id, image, name, quantity, price}) {
  return (
      <li key={id}>
        <img src={image} alt={image} height="100px" />
        <p>ID: {id}</p>
        <p>name: {name}</p>
        <p>quantity: {quantity}</p>
        <p>price: ${price * quantity}</p>
      </li>
  );
}

export default ShoppingItem;
