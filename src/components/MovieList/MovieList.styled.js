import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const StyledItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  font-size: 18px;

  &:hover,
  &:focus {
    transition: all 250ms linear;
    color: coral;
  }
`;
