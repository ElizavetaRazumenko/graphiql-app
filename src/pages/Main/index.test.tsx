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

  it('should prettify a query when click Prettify button', async () => {
    renderWithProviders(<Main />);

    const prettifyButton = await screen.findByTitle('Prettify');

    expect(prettifyButton).toBeInTheDocument();

    const textareas = screen.getAllByRole('textbox');

    expect(textareas[0]).toBeInTheDocument();

    fireEvent.change(textareas[0], { target: { value: '{{{}}}' } });
    expect(textareas[0]).toHaveValue('{{{}}}');

    fireEvent.click(prettifyButton);

    expect(textareas[0]).toHaveValue(`{
  {
    {
      
    }
  }
}`);
  });

  it('should switch state of the Change/Accept Endpoint button on click', async () => {
    renderWithProviders(<Main />);

    const toggleEndpoint = await screen.findByText('Change Endpoint');

    expect(toggleEndpoint).toBeInTheDocument();

    fireEvent.click(toggleEndpoint);

    expect(toggleEndpoint).toHaveTextContent('Accept Endpoint');

    fireEvent.click(toggleEndpoint);

    expect(toggleEndpoint).toHaveTextContent('Change Endpoint');
  });
});
