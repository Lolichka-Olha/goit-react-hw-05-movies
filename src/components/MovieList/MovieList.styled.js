import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;
  font-size: 18px;
  /* &:not(:last-of-type) {
    margin-bottom: 30px;
  } */
  &:hover,
  &:focus {
    transition: all 250ms linear;
    color: coral;
  }
`;
