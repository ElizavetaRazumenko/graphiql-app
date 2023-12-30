import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import Login from './Login.component';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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
});
