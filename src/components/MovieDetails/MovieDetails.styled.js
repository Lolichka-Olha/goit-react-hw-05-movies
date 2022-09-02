import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Info = styled.div`
  margin-left: 100px;
  h2 {
    color: #3f51b5;
    margin-bottom: 10px;
  }
  h3 {
    padding-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
`;

export const MoreInfo = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  padding: 6px 12px;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  &:not(:last-of-type) {
    margin-right: 100px;
  }
`;

export const GenresContainer = styled.div`
  display: flex;
`;

export const Genres = styled.div`
  display: flex;
  &:not(:last-of-type) {
    margin-right: 15px;
  }
  &:first-of-type {
    margin-left: 20px;
  }
`;

export const Button = styled.button`
  display: block;
  padding: 6px 12px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background-color: #3f51b5;
  outline: none;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 250ms linear;
  &:hover {
    color: black;
    transition: all 250ms linear;
  }
`;
