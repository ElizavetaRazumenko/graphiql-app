import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import { Footer } from '../Footer';
import { MainWrapper } from './styled';
import { Header } from '../Header';
import LocalizationContext from '../../context/localizationContext';

const LayoutWithErrorHandling = () => {
  return (
    <ErrorBoundary>
      <LocalizationContext>
        <Header />
        <MainWrapper>
          <Outlet />
        </MainWrapper>
        <Footer />
      </LocalizationContext>
    </ErrorBoundary>
  );
};

export default LayoutWithErrorHandling;
