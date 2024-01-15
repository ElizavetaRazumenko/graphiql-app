import { describe, expect, it, vi } from 'vitest';

import { renderWithProviders } from '../../test';
import DocumentationModal from './DocumentationModal.component';
import { fireEvent, screen } from '@testing-library/react';
import { useState } from 'react';
import { noop, testURL } from '../../../setupTests';
import { User } from 'firebase/auth';

vi.mock('firebase/auth', async () => {
  return {
    getAuth: vi.fn(() => ({ currentUser: {} as User })),
    getIdToken: vi.fn(() => 'testToken12345'),
  };
});

describe('DocumentationModal', () => {
  it('should render DocumentationModal', async () => {
    renderWithProviders(
      <DocumentationModal
        isModalOpen={true}
        setIsModalOpen={noop}
        endpointURL={testURL}
        setError={noop}
      />,
    );

    const title = await screen.findByText(
      'A GraphQL schema provides a root type for each kind of operation.',
    );
    expect(title).toBeInTheDocument();
  });

  it('should hide DocumentationModal on CloseModalButton click', async () => {
    const TestComponent: () => JSX.Element = () => {
      const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
      return (
        <>
          {isModalOpen && (
            <DocumentationModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              endpointURL={testURL}
              setError={noop}
            />
          )}
        </>
      );
    };
    renderWithProviders(<TestComponent />);

    const title = await screen.findByText(
      'A GraphQL schema provides a root type for each kind of operation.',
    );
    expect(title).toBeInTheDocument();

    const closeButtons = await screen.findAllByRole('button');
    fireEvent.click(closeButtons[0]);

    expect(title).not.toBeInTheDocument();
  });
});
