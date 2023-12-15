import { Component, ErrorInfo, ReactNode } from 'react';
import { Typography } from '@mui/material';
import {
  LocalizationContextType,
  localizationContext,
} from '../../context/localizationContext';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  static contextType = localizationContext;

  public state: State = {
    hasError: false,
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      const {
        currentLocalization: {
          errorBoundary: { errorMessage },
        },
      } = this.context as LocalizationContextType;
      return <Typography variant="h1">{errorMessage}</Typography>;
    }

    return this.props.children;
  }
}
