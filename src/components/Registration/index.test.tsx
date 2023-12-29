import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';
import Registration from './Registration.component';

describe('Registration', () => {
  it('should render Registration', () => {
    renderWithProviders(<Registration />);
  });
});
