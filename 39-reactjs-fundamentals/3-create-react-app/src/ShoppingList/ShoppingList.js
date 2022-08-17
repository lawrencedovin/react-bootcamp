import './ShoppingList.css';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import total from '../utils/ShoppingFunctions';
import Alert from '../Alert/Alert';

function ShoppingList({items, username}) {
  return (
    <>
      <Alert variant="success">
        Successful login!
      </Alert>
      <Alert variant="danger">
        Logged out!
      </Alert>
      <h1 className="shopping__title">{username}'s Shopping List</h1>
      <ul className="shopping__list">
        {items.map(item => 
          <ShoppingItem id={item.id} name={item.name} image={item.img} 
                        price={item.price} quantity={item.qty} 
          />
        )}
      </ul>
      <br />
      <h2 className="shopping__total">Total Shopping List Price: ${total(items)}</h2>
    </>
  );
}

export default ShoppingList;
