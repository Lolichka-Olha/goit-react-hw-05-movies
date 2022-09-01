import { searchMovies } from '../api/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList';
import SearchBar from '../components/SearchBar/SearchBar';
import Loader from '../components/Loader/Loader';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    if (search) {
      const fetchMovies = async () => {
        setLoading(true);
        try {
          const { data } = await searchMovies(search);
          setMovies(data.results);
        } catch (error) {
        } finally {
          setLoading(false);
        }
      };
      fetchMovies();
    }
  }, [search]);

  const changeSearch = search => {
    setSearchParams({ search });
  };

  return (
    <main>
      <SearchBar onSubmit={changeSearch} />
      {loading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default MoviesPage;
