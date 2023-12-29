import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';

import NotFound from '.';

describe('NotFound', () => {
  it('should render NotFound page', () => {
    renderWithProviders(<NotFound />);
  });
});
