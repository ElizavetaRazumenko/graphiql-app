import { describe, it } from 'vitest';

import { renderWithProviders } from '../../test';
import DocumentationModal from './DocumentationModal.component';

describe('DocumentationModal', () => {
  it('should render DocumentationModal', () => {
    renderWithProviders(
      <DocumentationModal isModalOpen setIsModalOpen={() => {}} />,
    );
  });
});
