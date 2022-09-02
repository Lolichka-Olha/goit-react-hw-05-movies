import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledFormBtn,
  Icon,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          name="search"
          onChange={handleChange}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          required
        />
        <StyledFormBtn type="submit">
          <Icon />
        </StyledFormBtn>
      </StyledForm>
    </FormContainer>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
