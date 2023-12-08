import { Component, ErrorInfo, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      return <Typography>Oops! Something went wrong</Typography>;
    }

    return this.props.children;
  }
}

const LayoutWithErrorHandling = () => (
  <ErrorBoundary>
    <Outlet />
  </ErrorBoundary>
);

export default LayoutWithErrorHandling;
