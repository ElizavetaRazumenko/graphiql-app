import { describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '../../test';
import Header from './Header.component';
import { fireEvent, screen } from '@testing-library/react';
import {
  MemoryRouter,
  Outlet,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
import AuthPage from '../../pages/AuthPage';
import { noop } from '../../../setupTests';
import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute';
import * as firebaseAuth from 'firebase/auth';
import { OutletContext } from '../LayoutWithErrorHandling';

describe('Header', () => {
  it('should render Header', async () => {
    const route = '/';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Header isAuthenticated={true} loading={false} />
      </MemoryRouter>,
    );

    const logo = await screen.findByText('GraphiQL');
    expect(logo).toBeInTheDocument();
  });

  it('should switch language to French', async () => {
    const route = '/';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Header isAuthenticated={false} loading={false} />
      </MemoryRouter>,
    );

    const linkLoginEn = await screen.findByRole('link', {
      name: 'Login',
    });
    expect(linkLoginEn).toBeInTheDocument();

    const buttonFR = await screen.findByRole('button', {
      name: 'FR',
    });
    expect(buttonFR).toBeInTheDocument();

    fireEvent.click(buttonFR);

    const linkLoginFr = await screen.findByRole('link', {
      name: 'Se connecter',
    });
    expect(linkLoginFr).toBeInTheDocument();
  });

  const TestAppNotAuth = () => {
    const testOutletContext: OutletContext = {
      isAuthenticated: false,
      loading: false,
    };
    return (
      <>
        <Header isAuthenticated={false} loading={false} />
        <Outlet context={testOutletContext} />
      </>
    );
  };
  const testRoutesNotAuth: Array<RouteObject> = [
    {
      path: '/',
      element: <TestAppNotAuth />,
      children: [
        {
          path: 'auth',
          element: <PublicRoute page={<AuthPage />} />,
        },
      ],
    },
  ];
  const testRouterNoAuth = createMemoryRouter(testRoutesNotAuth, {
    initialEntries: [`/`],
  });

  it('should navigate to Login page on Login link click', async () => {
    const useSearchParamsMock: typeof reactRouterDom.useSearchParams = () => {
      return [
        new URLSearchParams([['action', 'login']]),
        noop as reactRouterDom.SetURLSearchParams,
      ];
    };

    vi.spyOn(reactRouterDom, 'useSearchParams').mockImplementation(
      useSearchParamsMock,
    );

    renderWithProviders(<RouterProvider router={testRouterNoAuth} />);

    const linkLogin = await screen.findByRole('link', {
      name: 'Login',
    });
    expect(linkLogin).toBeInTheDocument();

    fireEvent.click(linkLogin);

    expect(testRouterNoAuth.state.location.pathname).toBe('/auth');

    const pageTitle = await screen.findByRole('heading', { level: 1 });
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent('Login');
  });

  it('should navigate to Registration page on Registration link click', async () => {
    const useSearchParamsMock: typeof reactRouterDom.useSearchParams = () => {
      return [
        new URLSearchParams([['action', 'register']]),
        noop as reactRouterDom.SetURLSearchParams,
      ];
    };

    vi.spyOn(reactRouterDom, 'useSearchParams').mockImplementation(
      useSearchParamsMock,
    );

    renderWithProviders(<RouterProvider router={testRouterNoAuth} />);

    const linkRegistration = await screen.findByRole('link', {
      name: 'Registration',
    });
    expect(linkRegistration).toBeInTheDocument();

    fireEvent.click(linkRegistration);

    expect(testRouterNoAuth.state.location.pathname).toBe('/auth');

    const pageTitle = await screen.findByRole('heading', { level: 1 });
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent('Registration');
  });

  const TestAppAuth = () => {
    const testOutletContext: OutletContext = {
      isAuthenticated: true,
      loading: false,
    };
    return (
      <>
        <Header isAuthenticated={true} loading={false} />
        <Outlet context={testOutletContext} />
      </>
    );
  };
  const testRoutesAuth: Array<RouteObject> = [
    {
      path: '/',
      element: <TestAppAuth />,
      children: [
        {
          path: 'main',
          element: <PrivateRoute page={<>Test Main Page</>} />,
        },
      ],
    },
  ];
  const testRouterAuth = createMemoryRouter(testRoutesAuth, {
    initialEntries: [`/`],
  });

  it('should navigate to Main page on Main Page link click', async () => {
    renderWithProviders(<RouterProvider router={testRouterAuth} />);

    const linkMain = await screen.findByRole('link', {
      name: 'Main Page',
    });
    expect(linkMain).toBeInTheDocument();

    fireEvent.click(linkMain);

    expect(testRouterAuth.state.location.pathname).toBe('/main');

    const editorTitle = await screen.findByText('Test Main Page');
    expect(editorTitle).toBeInTheDocument();
  });

  it('should navigate to Welcome page on Logo link click', async () => {
    const testRouterAuthMain = createMemoryRouter(testRoutesAuth, {
      initialEntries: [`/main`],
    });
    renderWithProviders(<RouterProvider router={testRouterAuthMain} />);

    const linkLogo = await screen.findByRole('link', {
      name: 'GraphiQL',
    });
    expect(linkLogo).toBeInTheDocument();

    fireEvent.click(linkLogo);

    expect(testRouterAuthMain.state.location.pathname).toBe('/');
  });

  it('should sign out a user on Logout link click', async () => {
    vi.mock('firebase/auth', async () => {
      const actual = await vi.importActual('firebase/auth');
      return {
        ...actual,
        signOut: vi.fn(async () => {}),
      };
    });
    const spyOnSignOutCall = vi.spyOn(firebaseAuth, 'signOut');
    const route = '/';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Header isAuthenticated={true} loading={false} />
      </MemoryRouter>,
    );

    const linkLogout = await screen.findByRole('link', {
      name: 'Logout',
    });
    expect(linkLogout).toBeInTheDocument();

    fireEvent.click(linkLogout);

    expect(spyOnSignOutCall).toBeCalled();
  });
});
