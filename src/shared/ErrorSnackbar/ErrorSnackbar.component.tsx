import { Snackbar, SnackbarProps, Alert } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

const ErrSnackbar = (props: SnackbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(Boolean(props.message));
  }, [props.message]);

  const handleClose = (): void => setIsOpen(false);

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      autoHideDuration={6000}
      onClose={handleClose}
      {...props}
    >
      <Alert severity="error" variant="filled" onClose={handleClose}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

const ErrorSnackbar = styled(ErrSnackbar)<SnackbarProps>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down('sm')]: {
      maxWidth: '180px',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '380px',
    },
    '& .MuiAlert-message': {
      fontSize: '12px',
    },
  }),
);

export default ErrorSnackbar;
