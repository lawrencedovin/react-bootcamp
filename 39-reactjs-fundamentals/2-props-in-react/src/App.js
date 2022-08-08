import logo from './logo.svg';
import './App.css';
import Animal from './components/Animal/Animal';
import RandomChoice from './components/RandomChoice/RandomChoice';
import CoinFlip from './components/CoinFlip/CoinFlip';
import TodosList from './components/TodosList/TodosList';

const App = () => (
    <div className="App">
      <Animal emoji="🦁" name="Lion" sound="roar" />
      <Animal emoji="🐶" name="Dog" sound="bark" />
      <Animal emoji="😺" name="Cat" sound="meow" />
      <RandomChoice array={['red', 'green', 'yellow']} />
      <CoinFlip />
      <TodosList array={['buy burger', 'eat burger', 'celebrate', 'praise the LORD!']} />
    </div>
)

export default App;
