import { Component, ErrorInfo, ReactNode } from 'react';
import { Typography } from '@mui/material';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      return <Typography variant="h1">Oops! Something went wrong</Typography>;
    }

    return this.props.children;
  }
}
