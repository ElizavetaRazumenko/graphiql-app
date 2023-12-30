import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';

import Main from '.';
import { screen } from '@testing-library/react';

describe('Main', () => {
  it('should render Main page', async () => {
    renderWithProviders(<Main />);

    const editor = await screen.findByText('Query editor');

    expect(editor).toBeInTheDocument();
  });
});
