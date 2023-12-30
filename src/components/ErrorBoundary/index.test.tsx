import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import ErrorBoundary from '.';
import { screen } from '@testing-library/react';

describe('ErrorBoundary', () => {
  it('should render ErrorBoundary', async () => {
    const Child = () => {
      throw new Error();
    };

    renderWithProviders(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>,
    );

    const errorMessage = await screen.findByText('Oops! Something went wrong');
    expect(errorMessage).toBeInTheDocument();
  });
});
