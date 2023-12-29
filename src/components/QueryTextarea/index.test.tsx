import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';
import QueryTextarea from './QueryTextarea.component';

describe('QueryTextarea', () => {
  it('should render QueryTextarea', () => {
    renderWithProviders(<QueryTextarea></QueryTextarea>);
  });
});
