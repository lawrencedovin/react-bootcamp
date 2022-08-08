import logo from './logo.svg';
import './App.css';
import Animal from './components/Animal/Animal';
import RandomChoice from './components/RandomChoice/RandomChoice';
import CoinFlip from './components/CoinFlip/CoinFlip';

const App = () => (
    <div className="App">
      <Animal emoji="🦁" name="Lion" sound="roar" />
      <Animal emoji="🐶" name="Dog" sound="bark" />
      <Animal emoji="😺" name="Cat" sound="meow" />
      <RandomChoice array={['red', 'green', 'yellow']} />
      <CoinFlip />
    </div>
)

export default App;
