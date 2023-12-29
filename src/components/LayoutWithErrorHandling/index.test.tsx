import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';
import LayoutWithErrorHandling from '.';

describe('LayoutWithErrorHandling', () => {
  it('should render LayoutWithErrorHandling', () => {
    renderWithProviders(<LayoutWithErrorHandling />);
  });
});
