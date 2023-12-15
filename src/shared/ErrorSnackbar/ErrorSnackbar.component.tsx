import { Snackbar, SnackbarProps, Alert } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

const ErrSnackbar = (props: SnackbarProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      {...props}
    >
      <Alert severity="error" variant="filled">
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
      maxWidth: '350px',
    },
    '& .MuiAlert-message': {
      fontSize: '12px',
    },
  }),
);

export default ErrorSnackbar;
