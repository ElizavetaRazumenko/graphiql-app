import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Registration from './pages/Registration';
import PrivateRoute from './routes/PrivateRoute';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import LayoutWithErrorHandling from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWithErrorHandling />,
    children: [
      {
        path: '',
        index: true,
        element: <Welcome />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'registration',
        element: <Registration />,
      },
      {
        path: 'main',
        element: <PrivateRoute page={<Main />} />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
