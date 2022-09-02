import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from '../api/api';
import Reviews from '../components/Reviews/Reviews';
import Loader from 'components/Loader/Loader';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async movieId => {
      setLoading(true);
      try {
        const { data } = await getReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <Reviews reviews={reviews} />
      ) : (
        <p>There are no reviews for this movie yet</p>
      )}
    </>
  );
};

export default ReviewsPage;
