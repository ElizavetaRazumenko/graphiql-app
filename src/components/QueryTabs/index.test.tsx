import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import QueryTabs from './QueryTabs.component';
import { screen } from '@testing-library/react';

describe('QueryTabs', () => {
  it('should render QueryTabs', async () => {
    renderWithProviders(
      <QueryTabs>
        <span>1</span>
      </QueryTabs>,
    );

    const variablesTab = await screen.findByText('Variables');
    const headersTab = await screen.findByText('Headers');

    expect(variablesTab).toBeInTheDocument();
    expect(headersTab).toBeInTheDocument();
  });
});
