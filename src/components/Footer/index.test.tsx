import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';
import { Footer } from './Footer.component';

describe('Footer', () => {
  it('should render Footer page', () => {
    renderWithProviders(<Footer />);
  });
});
