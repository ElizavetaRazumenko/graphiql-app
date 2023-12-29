import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';
import Login from './Login.component';

describe('Login', () => {
  it('should render Login', () => {
    renderWithProviders(<Login />);
  });
});
