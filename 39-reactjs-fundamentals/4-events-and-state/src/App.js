import logo from './logo.svg';
import './App.css';
import Clicker from './components/Clicker';
import ButtonGroup from './components/ButtonGroup';
import Counter from './components/Counter';
import NumberGame from './components/NumberGame';

function App() {
  return (
    <div className="App">
      {/* <Clicker message="Hello world!" btnText="Click Hello" />
      <Clicker message=":)" btnText="Click Smiley" />
      <ButtonGroup />
      <Counter /> */}
      <NumberGame />
    </div>
  );
}

export default App;
