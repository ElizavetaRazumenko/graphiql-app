import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import Registration from './Registration.component';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Registration', () => {
  it('should render Registration', async () => {
    const route = '/';

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Registration />
      </MemoryRouter>,
    );

    const title = await screen.findByText('Registration');

    expect(title).toBeInTheDocument();
  });
});
