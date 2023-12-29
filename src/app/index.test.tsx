import { describe, it } from 'vitest';

import { renderWithProviders } from '../test';
import App from '.';

describe('App', () => {
  it('should render App', () => {
    renderWithProviders(<App />);
  });
});
