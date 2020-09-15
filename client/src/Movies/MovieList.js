import React from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

export default function MovieList(props) {
  const { url } = useRouteMatch();
  console.log('the url', url);
  const history = useHistory();

  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <Link to={`/movies/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  console.log(props);
  const { title, director, metascore, id } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
