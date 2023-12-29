import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';
import { Subtitle } from '.';

describe('Subtitle', () => {
  it('should render Subtitle', () => {
    renderWithProviders(<Subtitle />);
  });
});
