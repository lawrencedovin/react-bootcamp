function MovieList() {
  const movies = [
    {id: 1, text: "Passion of the Christ"},
    {id: 2, text: "The Chosen"}
  ]
  return (
    <ul>
      {movies.map(movie => <li>{movie.text}</li>)}
    </ul>
  );
}

export default MovieList;
