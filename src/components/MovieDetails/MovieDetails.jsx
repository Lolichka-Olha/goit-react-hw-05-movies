import PropTypes from 'prop-types';
import {
  Info,
  GenresContainer,
  Genres,
  MovieContainer,
} from './MovieDetails.styled';

const MovieDetails = ({ movie }) => {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  return (
    <MovieContainer>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
        }
        alt={original_title}
      />
      <Info>
        <h1>{original_title}</h1>
        <h2> ({release_date})</h2>
        <p>User Score: {vote_average} %</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <GenresContainer>
          <h3>Genres:</h3>
          {genres &&
            genres.map(({ id, name }) => <Genres key={id}>{name}</Genres>)}
        </GenresContainer>
      </Info>
    </MovieContainer>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
