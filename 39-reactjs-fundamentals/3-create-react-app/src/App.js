import './App.css';
import ShoppingList from './ShoppingList/ShoppingList';
import items from './items';
import logo from './images/space-logo.svg';

function App() {
  return (
    <>
      <img src={logo} alt={logo} height="50px" />
      <ShoppingList items={items} username="lawrence" />
    </>
  );
}

export default App;
