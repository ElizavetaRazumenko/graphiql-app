import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';
import QueryTabs from './QueryTabs.component';

describe('QueryTabs', () => {
  it('should render QueryTabs', () => {
    renderWithProviders(
      <QueryTabs>
        <span>1</span>
      </QueryTabs>,
    );
  });
});
