import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';

import NotFound from '.';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('NotFound', () => {
  it('should render NotFound page', async () => {
    const route = '/';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <NotFound />
      </MemoryRouter>,
    );

    const notFoundText = await screen.findByText('Page not found');

    expect(notFoundText).toBeInTheDocument();
  });
});
