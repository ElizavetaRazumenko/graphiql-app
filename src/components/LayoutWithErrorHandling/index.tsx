import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';
import { MainWrapper } from './styled';

const LayoutWithErrorHandling = () => {
  return (
    <ErrorBoundary>
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </ErrorBoundary>
  );
};

export default LayoutWithErrorHandling;
