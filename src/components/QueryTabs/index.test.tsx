import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import QueryTabs from './QueryTabs.component';
import { fireEvent, screen } from '@testing-library/react';

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

  it('should switch between tabs on tab title click', async () => {
    renderWithProviders(
      <QueryTabs>
        <span>Tab1</span>
        <span>Tab2</span>
      </QueryTabs>,
    );

    const firstTab = await screen.findByText('Tab1');
    expect(firstTab).toBeInTheDocument();

    const headersTab = await screen.findByText('Headers');
    expect(headersTab).toBeInTheDocument();

    fireEvent.click(headersTab);

    expect(firstTab).not.toBeInTheDocument();

    const secondTab = await screen.findByText('Tab2');
    expect(secondTab).toBeInTheDocument();
  });
});
