import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import { Footer } from '../Footer';
import { MainWrapper } from './styled';
import { Header } from '../Header';
import LocalizationContext from '../../context/localizationContext';
import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Suspense } from 'react';
import { Spinner } from '../../shared/Spinner';

export type OutletContext = {
  isAuthenticated: boolean;
  loading: boolean;
};

const LayoutWithErrorHandling = () => {
  const [user, loading] = useIdToken(auth);
  const isAuthenticated: boolean = Boolean(user);
  return (
    <Suspense fallback={<Spinner open />}>
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
    </Suspense>
  );
};

export default LayoutWithErrorHandling;
