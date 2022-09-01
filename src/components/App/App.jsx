import Menu from '../Menu/Menu';
import UserRoutes from './UserRoutes';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Menu />
      <UserRoutes />
      {/* <ToastContainer position="top-right" /> */}
    </Container>
  );
};

export default App;
