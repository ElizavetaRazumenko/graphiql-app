import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';

import AuthPage from '.';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('AuthPage', () => {
  it('should render Auth login page', async () => {
    const route = '/?action=login';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <AuthPage />
      </MemoryRouter>,
    );

    const loginTitle = await screen.findByText('Login');

    expect(loginTitle).toBeInTheDocument();
  });
  it('should render Auth registration page', async () => {
    const route = '/?action=register';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <AuthPage />
      </MemoryRouter>,
    );

    const registrationTitle = await screen.findByText('Registration');

    expect(registrationTitle).toBeInTheDocument();
  });
});
