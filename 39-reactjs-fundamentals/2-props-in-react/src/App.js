import logo from './logo.svg';
import './App.css';
import Animal from './components/Animal/Animal';

const App = () => (
    <div className="App">
      <Animal emoji="🦁" name="Lion" sound="roar" />
      <Animal emoji="🐶" name="Dog" sound="bark" />
      <Animal emoji="😺" name="Cat" sound="meow" />
    </div>
)

export default App;
