import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../test';
import { screen } from '@testing-library/react';
import {
  Outlet,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import PublicRoute from '.';
import PrivateRoute from '../PrivateRoute';
import { OutletContext } from '../../components/LayoutWithErrorHandling';

describe('Public Route', () => {
  const TestApp = () => {
    const testOutletContext: OutletContext = {
      isAuthenticated: false,
      loading: true,
    };
    return (
      <>
        <>Test Page</>
        <Outlet context={testOutletContext} />
      </>
    );
  };
  const testRoutes: Array<RouteObject> = [
    {
      path: '/',
      element: <TestApp />,
      children: [
        {
          path: 'auth',
          element: <PublicRoute page={<>Test Child Page</>} />,
        },
      ],
    },
  ];
  const testRouter = createMemoryRouter(testRoutes, {
    initialEntries: [`/auth`],
  });

  it('should show spinner when loading is true', async () => {
    renderWithProviders(<RouterProvider router={testRouter} />);

    const spinner: HTMLElement = document.querySelector(
      '.MuiCircularProgress-root',
    ) as HTMLElement;

    expect(spinner).toBeInTheDocument();
  });

  const TestAppAuth = () => {
    const testOutletContext: OutletContext = {
      isAuthenticated: true,
      loading: false,
    };
    return (
      <>
        <>Test Page</>
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
          path: 'auth',
          element: <PublicRoute page={<>Test Child Page</>} />,
        },
        {
          path: 'main',
          element: <PrivateRoute page={<span>Test Main Page</span>} />,
        },
      ],
    },
  ];
  const testRouterAuth = createMemoryRouter(testRoutesAuth, {
    initialEntries: [`/auth`],
  });

  it('should redirect user to main if logged in', async () => {
    renderWithProviders(<RouterProvider router={testRouterAuth} />);

    const testMainPageTitle = await screen.findByText('Test Main Page');
    expect(testMainPageTitle).toBeInTheDocument();
  });
});
