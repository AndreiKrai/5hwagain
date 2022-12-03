import React from 'react';
import MovieListItem from './MovieListItem';

export default function MovieList({headerText,movies}) {  console.log(movies);

  return (
  <>
    <h1>{headerText}</h1>
    <ul>
      {movies.map(movie =>
      <MovieListItem key={movie.id} name={movie.original_title || movie.name} id={movie.id}/>)}
    </ul></>
  );
}
