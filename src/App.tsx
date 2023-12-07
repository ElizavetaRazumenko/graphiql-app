import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Registration from './pages/Registration';

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
