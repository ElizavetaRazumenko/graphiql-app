import { describe, expect, it, vi } from 'vitest';

import { renderWithProviders } from '../../test';
import Registration from './Registration.component';
import { screen } from '@testing-library/react';
import {
  MemoryRouter,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import { UserCredential } from 'firebase/auth';
import * as firebaseHandler from '../../firebase';
import { AuthActionHook } from 'react-firebase-hooks/auth/dist/auth/types';

describe('Registration', () => {
  it('should render Registration', async () => {
    const route = '/';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Registration />
      </MemoryRouter>,
    );

    const title = await screen.findByText('Registration');

    expect(title).toBeInTheDocument();
  });

  it('should redirect a user to Main if logged in', async () => {
    const testRoutes: Array<RouteObject> = [
      {
        path: '/',
        element: <Registration />,
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
      firebaseHandler,
      'useRegisterWithEmailAndPassword',
    ).mockImplementation(
      () =>
        [
          vi.fn(),
          {} as UserCredential,
          false,
          undefined,
        ] as AuthActionHook<firebaseHandler.RegisterCallback>,
    );

    renderWithProviders(<RouterProvider router={testRouter} />);

    expect(testRouter.state.location.pathname).toBe('/main');
  });
});
