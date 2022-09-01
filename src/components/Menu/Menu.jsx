import { Link, Nav, Header } from './Menu.styled';

const Menu = () => {
  return (
    <Header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </Header>
  );
};

export default Menu;
