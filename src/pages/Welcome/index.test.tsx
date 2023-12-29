import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';

import Welcome from '.';

describe('Welcome', () => {
  it('should render welcome page', () => {
    renderWithProviders(<Welcome />);
  });
});
