import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';
import { Wrapper } from '.';

describe('Wrapper', () => {
  it('should render Wrapper', () => {
    renderWithProviders(<Wrapper />);
  });
});
