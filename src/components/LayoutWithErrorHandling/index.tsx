import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import { Footer } from '../Footer';
import { MainWrapper } from './styled';
import { Header } from '../Header';

const LayoutWithErrorHandling = () => {
  return (
    <ErrorBoundary>
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </ErrorBoundary>
  );
};

export default LayoutWithErrorHandling;
