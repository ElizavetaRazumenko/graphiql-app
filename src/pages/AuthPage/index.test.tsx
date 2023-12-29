import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';

import AuthPage from '.';

describe('AuthPage', () => {
  it('should render Auth page', () => {
    renderWithProviders(<AuthPage />);
  });
});
