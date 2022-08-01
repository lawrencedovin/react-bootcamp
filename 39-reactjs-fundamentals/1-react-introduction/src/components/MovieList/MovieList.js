const movies = [
  {id: 1, text: "Passion of the Christ"},
  {id: 2, text: "The Chosen"}
]

const MovieList = () => (
    <ul>
      {movies.map(movie => <li key={movie.id}>{movie.text}</li>)}
    </ul>
);

export default MovieList;
