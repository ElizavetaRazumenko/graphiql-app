import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test';

import Main from '.';
import { fireEvent, screen } from '@testing-library/react';

describe('Main', () => {
  it('should render Main page', async () => {
    renderWithProviders(<Main />);

    const editor = await screen.findByText('Query editor');

    expect(editor).toBeInTheDocument();
  });

  it('should click Prettify button', async () => {
    renderWithProviders(<Main />);

    const prettifyButton = await screen.findByTitle('Prettify');

    expect(prettifyButton).toBeInTheDocument();

    fireEvent.click(prettifyButton);
  });
  it('should click Show endpoint button', async () => {
    renderWithProviders(<Main />);

    const showEndpoint = await screen.findByText('Change Endpoint');

    expect(showEndpoint).toBeInTheDocument();

    expect(showEndpoint).toHaveTextContent('Change Endpoint');

    fireEvent.click(showEndpoint);

    expect(showEndpoint).toHaveTextContent('Accept Endpoint');
  });
  it('should click Submit button', async () => {
    renderWithProviders(<Main />);

    const showEndpoint = await screen.findByText('Change Endpoint');
    fireEvent.click(showEndpoint);

    expect(showEndpoint).toHaveTextContent('Accept Endpoint');

    const endpointInput = await screen.findByPlaceholderText('Your endpoint');
    fireEvent.change(endpointInput, {
      target: { value: 'https://rickandmortyapi.com/graphql' },
    });
    const submitButton = await screen.findByTitle('submit');

    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);
  });
});
