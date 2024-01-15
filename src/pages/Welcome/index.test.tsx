import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';

import Welcome from '.';
import { screen } from '@testing-library/react';

describe('Welcome', () => {
  it('should render welcome page', async () => {
    renderWithProviders(<Welcome />);

    const welcomeText = await screen.findByText(
      'Welcome to our final project GraphiQL',
    );

    expect(welcomeText).toBeInTheDocument();
  });
});
