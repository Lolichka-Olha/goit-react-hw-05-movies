import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from '../api/api';
import Cast from '../components/Cast/Cast';
import Loader from 'components/Loader/Loader';

const CastPage = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async movieId => {
      setLoading(true);
      try {
        const { data } = await getCast(movieId);
        setCasts(data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {casts.length !== 0 ? <Cast casts={casts} /> : <p>Not found</p>}
    </>
  );
};

export default CastPage;
