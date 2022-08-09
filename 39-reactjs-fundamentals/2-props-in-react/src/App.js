import logo from './logo.svg';
import './App.css';
import Animal from './components/Animal/Animal';
import RandomChoice from './components/RandomChoice/RandomChoice';
import CoinFlip from './components/CoinFlip/CoinFlip';
import TodosList from './components/TodosList/TodosList';
import Alert from './components/Alert/Alert';

const todos = [
  {"id": 1, "name": "buy burger"},
  {"id": 2, "name": "eat burger"},
  {"id": 3, "name": "celebrate"},
  {"id": 4, "name": "praise the LORD!"},
]

const App = () => (
    <div className="App">
      <Alert>
        <Animal emoji="🦁" name="Lion" sound="roar" />
        <Animal emoji="🐶" name="Dog" sound="bark" />
        <Animal emoji="😺" name="Cat" sound="meow" />
      </Alert>
      <Alert>
        <RandomChoice array={['red', 'green', 'yellow']} />
      </Alert>
      <Alert>
        <CoinFlip />
      </Alert>
      <Alert>
        <TodosList array={todos} />
      </Alert>
    </div>
)

export default App;
