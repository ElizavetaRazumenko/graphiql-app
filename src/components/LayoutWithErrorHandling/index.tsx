import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';

const LayoutWithErrorHandling = () => {
  return (
    <ErrorBoundary>
      <Outlet />
      <Footer />
    </ErrorBoundary>
  );
};

export default LayoutWithErrorHandling;
