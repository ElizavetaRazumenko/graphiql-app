import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';

import { screen } from '@testing-library/react';
import AccordionItem from './AccordionItem.component';

describe('AccordionItem', () => {
  it('should render AccordionItem children', async () => {
    renderWithProviders(
      <AccordionItem summary="Accordion" children="Content" />,
    );

    const accordionTitle = await screen.findByText('Accordion');

    expect(accordionTitle).toBeInTheDocument();
  });
});
