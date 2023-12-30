import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import { Subtitle } from '.';
import { screen } from '@testing-library/react';

describe('Subtitle', () => {
  it('should render Subtitle', async () => {
    const testValue = 'test';
    renderWithProviders(<Subtitle>{testValue}</Subtitle>);

    const subtitle = await screen.findByText(testValue);

    expect(subtitle).toBeInTheDocument();
  });
});
