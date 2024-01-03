import { describe, expect, it, vi } from 'vitest';

import { renderWithProviders } from '../../test';
import Login from './Login.component';
import { screen } from '@testing-library/react';
import {
  MemoryRouter,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import * as firebaseHooksAuth from 'react-firebase-hooks/auth';
import { UserCredential } from 'firebase/auth';

describe('Login', () => {
  it('should render Login', async () => {
    const route = '/';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Login />
      </MemoryRouter>,
    );

    const title = await screen.findByText('Login');

    expect(title).toBeInTheDocument();
  });

  it('should redirect a user to Main if logged in', async () => {
    const testRoutes: Array<RouteObject> = [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/main',
        element: <></>,
      },
    ];
    const testRouter = createMemoryRouter(testRoutes, {
      initialEntries: [`/`],
    });

    vi.spyOn(
      firebaseHooksAuth,
      'useSignInWithEmailAndPassword',
    ).mockImplementation(
      () =>
        [
          vi.fn(),
          {} as UserCredential,
          false,
          undefined,
        ] as firebaseHooksAuth.EmailAndPasswordActionHook,
    );

    renderWithProviders(<RouterProvider router={testRouter} />);

    expect(testRouter.state.location.pathname).toBe('/main');
  });
});
