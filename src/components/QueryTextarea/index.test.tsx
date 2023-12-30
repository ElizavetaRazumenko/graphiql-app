import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import QueryTextarea from './QueryTextarea.component';
import { screen } from '@testing-library/react';

describe('QueryTextarea', () => {
  it('should render QueryTextarea', async () => {
    const testValue = 'test';
    renderWithProviders(
      <QueryTextarea defaultValue={testValue}></QueryTextarea>,
    );

    const textarea = await screen.findByText(testValue);

    expect(textarea).toBeInTheDocument();
  });
});
