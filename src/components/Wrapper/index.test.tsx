import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import { Wrapper } from '.';
import { screen } from '@testing-library/react';

describe('Wrapper', () => {
  it('should render Wrapper', async () => {
    const testValue = 'test';
    renderWithProviders(<Wrapper>{testValue}</Wrapper>);

    const wrapper = await screen.findByText(testValue);

    expect(wrapper).toBeInTheDocument();
  });
});
