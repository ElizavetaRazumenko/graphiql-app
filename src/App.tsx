import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Registration from './pages/Registration';
import PrivateRoute from './routes/PrivateRoute';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

const ErrorBoundaryLayout = () => (
  <ErrorBoundary>
    <Outlet />
  </ErrorBoundary>
);

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
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
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
