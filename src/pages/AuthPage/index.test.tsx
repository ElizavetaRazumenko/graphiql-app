import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';

import AuthPage from '.';
import { screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('AuthPage', () => {
  it('should render Auth login page', async () => {
    const route = '/auth?action=login';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <AuthPage />
      </MemoryRouter>,
    );

    const loginTitle = await screen.findByText('Login');

    expect(loginTitle).toBeInTheDocument();
  });

  it('should render Auth registration page', async () => {
    const route = '/auth?action=register';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <AuthPage />
      </MemoryRouter>,
    );

    const registrationTitle = await screen.findByText('Registration');

    expect(registrationTitle).toBeInTheDocument();
  });

  it('should navigate to Welcome if no action provided', async () => {
    const route = '/auth';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/" element={<div>Welcome Page</div>} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </MemoryRouter>,
    );

    const welcomePage = await screen.findByText('Welcome Page');

    expect(welcomePage).toBeInTheDocument();
  });
});
