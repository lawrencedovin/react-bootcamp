import logo from './logo.svg';
import './App.css';
import Clicker from './components/Clicker';

function App() {
  return (
    <div className="App">
      <Clicker message="Hello world!" btnText="Click Hello" />
      <Clicker message=":)" btnText="Click Smiley" />
    </div>
  );
}

export default App;
