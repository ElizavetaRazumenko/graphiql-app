import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './pages/Welcome';
import PrivateRoute from './routes/PrivateRoute';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import LayoutWithErrorHandling from './components/LayoutWithErrorHandling';
import AuthPage from './pages/AuthPage';

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
        element: <AuthPage />,
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
