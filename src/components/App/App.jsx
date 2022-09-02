import Menu from '../Menu/Menu';
import UserRoutes from './UserRoutes';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Menu />
      <UserRoutes />
    </Container>
  );
};

export default App;
