import { StyledLink } from '../components/MovieList/MovieList.styled';

const NotFoundPage = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <StyledLink to="/">To main page</StyledLink>
    </main>
  );
};
export default NotFoundPage;
