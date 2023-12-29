import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';
import ErrorBoundary from '.';

describe('ErrorBoundary', () => {
  it('should render ErrorBoundary', () => {
    renderWithProviders(<ErrorBoundary />);
  });
});
