import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import { Footer } from '../Footer';
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
