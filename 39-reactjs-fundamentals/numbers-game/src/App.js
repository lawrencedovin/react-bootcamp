import logo from './logo.svg';
import './App.css';
import ClickRandomNumber from './components/ClickRandomButton';

function App() {
  return (
    <div className="App">
      <ClickRandomNumber maxNumber={4} />
    </div>
  );
}

export default App;
