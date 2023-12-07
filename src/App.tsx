import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Registration from './pages/Registration';
import PrivateRoute from './routes/PrivateRoute';
import Main from './pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/main',
    element: <PrivateRoute page={<Main />} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
