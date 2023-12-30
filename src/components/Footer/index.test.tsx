import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import { Footer } from './Footer.component';
import { screen } from '@testing-library/react';

describe('Footer', () => {
  it('should render Footer page', async () => {
    renderWithProviders(<Footer />);

    const githubLinks = await screen.findAllByText('Github');
    expect(githubLinks).toHaveLength(3);
  });
});
