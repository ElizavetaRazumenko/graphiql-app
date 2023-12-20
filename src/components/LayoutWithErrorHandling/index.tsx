import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import { Footer } from '../Footer';
import { MainWrapper } from './styled';
import { Header } from '../Header';
import LocalizationContext from '../../context/localizationContext';
import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { OutletContext } from '../../shared/types/types';
import { Provider } from 'react-redux';
import { store } from '../../store';

const LayoutWithErrorHandling = () => {
  const [user, loading] = useIdToken(auth);
  const isAuthenticated: boolean = Boolean(user);
  return (
    <LocalizationContext>
      <ErrorBoundary>
        <Provider store={store}>
          <Header isAuthenticated={isAuthenticated} loading={loading} />
          <MainWrapper>
            <Outlet context={{ isAuthenticated, loading } as OutletContext} />
          </MainWrapper>
          <Footer />
        </Provider>
      </ErrorBoundary>
    </LocalizationContext>
  );
};

export default LayoutWithErrorHandling;
