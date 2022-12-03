import React from 'react';
import { fetchTrending } from 'helpers/api';
import { useState } from 'react';
import { useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';

export default function MainPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log('useEffect');
    setIsLoading(true);
    async function getTrengingMovies() {
      try {
        const data = await fetchTrending();
        setMovies(data.results);
      } catch (e) {
        console.log(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getTrengingMovies()
  }, []);

  return    <MovieList movies={movies} headerText='Trending today'/>;
}
