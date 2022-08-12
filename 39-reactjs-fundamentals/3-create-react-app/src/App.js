import './App.css';
import ShoppingList from './ShoppingList/ShoppingList';
import items from './items';

function App() {
  return (
    <>
      <ShoppingList items={items} />
    </>
  );
}

export default App;
