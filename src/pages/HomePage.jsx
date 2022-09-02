import { getTrending } from '../api/api';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import {
  StyledLink,
  StyledItem,
} from '../components/MovieList/MovieList.styled';

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
        console.log(error);
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
          <StyledItem key={id}>
            <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
          </StyledItem>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
