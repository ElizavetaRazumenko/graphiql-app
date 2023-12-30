import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import Header from './Header.component';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('should render Header', async () => {
    const route = '/';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Header isAuthenticated={true} loading={false} />
      </MemoryRouter>,
    );

    const logo = await screen.findByText('Main');
    expect(logo).toBeInTheDocument();
  });
});
