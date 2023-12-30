import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';
import DocumentationModal from './DocumentationModal.component';
import { screen } from '@testing-library/react';

describe('DocumentationModal', () => {
  it('should render DocumentationModal', async () => {
    renderWithProviders(
      <DocumentationModal isModalOpen setIsModalOpen={() => {}} />,
    );

    const title = await screen.findByText(
      'A GraphQL schema provides a root type for each kind of operation.',
    );
    expect(title).toBeInTheDocument();
  });
});
