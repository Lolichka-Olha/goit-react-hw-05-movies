import PropTypes from 'prop-types';
import { StyledList } from './Reviews.styled';
import { Container } from '../App/App.styled';

const Reviews = ({ reviews }) => {
  return (
    <Container>
      <StyledList>
        {reviews.map(({ id, created_at, content, author }) => (
          <li key={id}>
            <h2>{author}</h2>
            <p>{created_at}</p>
            <p>{content}</p>
          </li>
        ))}
      </StyledList>
    </Container>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};
