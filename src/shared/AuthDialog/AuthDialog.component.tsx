import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { AuthDialogWrapper } from './styled/AuthDialogWrapper';
import { AuthDialogBody } from './styled/AuthDialogBody';

export type AuthDialogProps = {
  children: ReactNode;
  title: string;
};

const AuthDialog = (props: AuthDialogProps) => {
  const { children, title } = props;
  return (
    <AuthDialogWrapper>
      <Typography variant="h1">{title}</Typography>
      <AuthDialogBody>{children}</AuthDialogBody>
    </AuthDialogWrapper>
  );
};

export default AuthDialog;
