import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};
