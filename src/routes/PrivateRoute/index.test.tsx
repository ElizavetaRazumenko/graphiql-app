import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../test';
import {
  Outlet,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import { OutletContext } from '../../shared/types/types';
import PrivateRoute from '../../routes/PrivateRoute';

describe('Private Route', () => {
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
          element: <PrivateRoute page={<>Test Child Page</>} />,
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
});
