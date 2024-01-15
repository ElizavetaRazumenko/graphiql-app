import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import PrivateRoute from '../routes/PrivateRoute';
import NotFound from '../pages/NotFound';
import LayoutWithErrorHandling from '../components/LayoutWithErrorHandling';
import PublicRoute from '../routes/PublicRoute';
import { lazy } from 'react';

const AuthPage = lazy(() => import('../pages/AuthPage'));
const Main = lazy(() => import('../pages/Main'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWithErrorHandling />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'auth',
        element: <PublicRoute page={<AuthPage />} />,
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
