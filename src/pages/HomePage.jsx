import { getTrending } from '../api/api';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import { StyledLink } from '../components/MovieList/MovieList.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const { data } = await getTrending();
        setMovies(data.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      {loading && <Loader />}
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
