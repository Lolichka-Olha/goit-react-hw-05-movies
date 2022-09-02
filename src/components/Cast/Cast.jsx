import PropTypes from 'prop-types';
import { List, Item, Info } from './Cast.styled';

export const Cast = ({ casts }) => {
  return (
    <List>
      {casts.map(({ id, original_name, profile_path, character }) => (
        <Item key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
            }
            alt={original_name}
          />
          <Info>
            <h3>{original_name}</h3>
            <p>{character}</p>
          </Info>
        </Item>
      ))}
    </List>
  );
};
export default Cast;

Cast.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      character: PropTypes.string,
    }).isRequired
  ),
};
