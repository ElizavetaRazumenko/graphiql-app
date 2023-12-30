import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import LayoutWithErrorHandling from '.';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('LayoutWithErrorHandling', () => {
  it('should render LayoutWithErrorHandling', async () => {
    const route = '/';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <LayoutWithErrorHandling />
      </MemoryRouter>,
    );
    const headerElement = await screen.findByText('GraphiQL');
    const footerElement = await screen.findByText('2023');

    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });
});
