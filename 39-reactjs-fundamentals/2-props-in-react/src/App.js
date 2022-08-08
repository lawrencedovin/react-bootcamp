import logo from './logo.svg';
import './App.css';
import Animal from './components/Animal/Animal';
import RandomChoice from './components/RandomChoice/RandomChoice';

const App = () => (
    <div className="App">
      <Animal emoji="🦁" name="Lion" sound="roar" />
      <Animal emoji="🐶" name="Dog" sound="bark" />
      <Animal emoji="😺" name="Cat" sound="meow" />
      <RandomChoice array={['red', 'green', 'yellow']} />
    </div>
)

export default App;
