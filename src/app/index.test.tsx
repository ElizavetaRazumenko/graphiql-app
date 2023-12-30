import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../test';
import App from '.';
import { screen } from '@testing-library/react';

describe('App', () => {
  it('should render App', async () => {
    renderWithProviders(<App />);

    const headerElement = await screen.findByText('GraphiQL');
    const footerElement = await screen.findByText('2023');

    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });
});
