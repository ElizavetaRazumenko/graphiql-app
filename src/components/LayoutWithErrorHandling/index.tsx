import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import { Footer } from '../Footer';
import { MainWrapper } from './styled';
import { Header } from '../Header';
import LocalizationContext from '../../context/localizationContext';

const LayoutWithErrorHandling = () => {
  return (
    <LocalizationContext>
      <ErrorBoundary>
        <Header />
        <MainWrapper>
          <Outlet />
        </MainWrapper>
        <Footer />
      </ErrorBoundary>
    </LocalizationContext>
  );
};

export default LayoutWithErrorHandling;
