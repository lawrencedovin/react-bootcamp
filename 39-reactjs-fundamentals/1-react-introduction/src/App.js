import logo from './logo.svg';
import MovieList from './components/MovieList/MovieList';
import Dog from './components/Dog/Dog';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieList />
      <Dog src="https://images.unsplash.com/photo-1550035605-144be67b33ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
      <Dog src="https://images.unsplash.com/photo-1619979842913-08603df442de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
    </div>
  );
}

export default App;
