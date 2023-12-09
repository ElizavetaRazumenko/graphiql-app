import { Component, ErrorInfo, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';
import Footer from '../Footer';

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
      return <Typography variant="h1">Oops! Something went wrong</Typography>;
    }

    return this.props.children;
  }
}

const LayoutWithErrorHandling = () => (
  <ErrorBoundary>
    <Outlet />
    <Footer />
  </ErrorBoundary>
);

export default LayoutWithErrorHandling;
