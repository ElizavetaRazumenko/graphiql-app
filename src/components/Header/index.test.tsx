import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';
import Header from './Header.component';

describe('Header', () => {
  it('should render Header page', () => {
    renderWithProviders(<Header isAuthenticated loading={false} />);
  });
});
