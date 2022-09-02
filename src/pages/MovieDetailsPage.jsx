import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getDetails } from '../api/api';
import Loader from '../components/Loader/Loader';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import {
  StyledLink,
  Button,
  MoreInfo,
} from '../components/MovieDetails/MovieDetails.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    const fetchMoviesDetails = async movieId => {
      setLoading(true);
      try {
        const { data } = await getDetails(movieId);
        // console.log(data);
        setMovie(data);
      } catch (error) {
        setError('Page is not found');
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesDetails(movieId);
  }, [movieId]);

  return (
    <main>
      <section>
        <Button type="button" onClick={goBack}>
          Go back
        </Button>
        {loading && <Loader />}
        {movie && <MovieDetails movie={movie} />}
        {error && <p>Something went wrong, please try again later!</p>}
      </section>
      <section>
        <MoreInfo>
          <StyledLink
            to={`/movies/${movieId}/cast`}
            state={{ from: location?.state?.from }}
          >
            Cast
          </StyledLink>

          <StyledLink
            to={`/movies/${movieId}/reviews`}
            state={{ from: location?.state?.from }}
          >
            Reviews
          </StyledLink>
        </MoreInfo>
      </section>
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;
