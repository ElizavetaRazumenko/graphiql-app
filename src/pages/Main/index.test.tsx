import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';

import Main from '.';

describe('Main', () => {
  it('should render Main page', () => {
    renderWithProviders(<Main />);
  });
});
