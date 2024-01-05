import { Navigate, useOutletContext } from 'react-router-dom';
import { Spinner } from '../../shared/Spinner';
import { OutletContext } from '../../components/LayoutWithErrorHandling';

export type PublicRouteProps = {
  page: JSX.Element;
};

function PublicRoute({ page }: PublicRouteProps) {
  const { isAuthenticated, loading } = useOutletContext<OutletContext>();
  if (isAuthenticated) {
    return <Navigate to="/main" replace />;
  }

  return (
    <>
      <Spinner open={loading} />
      {!loading && page}
    </>
  );
}

export default PublicRoute;
