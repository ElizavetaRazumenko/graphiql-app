import { Navigate, useOutletContext } from 'react-router-dom';
import { OutletContext } from '../../shared/types/types';
import { Spinner } from '../../shared/Spinner';

export type PrivateRouteProps = {
  page: JSX.Element;
};

function PrivateRoute({ page }: PrivateRouteProps) {
  const { isAuthenticated, loading } = useOutletContext<OutletContext>();
  if (isAuthenticated) {
    return page;
  }

  return (
    <>
      <Spinner open={loading} />
      {!loading && <Navigate to="/" replace />}
    </>
  );
}

export default PrivateRoute;
