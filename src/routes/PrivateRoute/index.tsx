import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from './types/types';

function PrivateRoute({ page }: PrivateRouteProps) {
  const isAuth = true;
  if (isAuth) {
    return page;
  }

  return <Navigate to="/" replace />;
}

export default PrivateRoute;
