import { TextField, TextFieldProps } from '@mui/material';
import { Theme, styled } from '@mui/material/styles';

export const QueryContent = styled(TextField)<TextFieldProps>(
  ({ theme }: { theme: Theme }) => ({
    width: '100%',
    resize: 'none',
    flex: '1 0 auto',
    '& textarea': {
      cursor: 'pointer',
    },
    '& .MuiInputBase-root': {
      color: theme.palette.primary.main,
      fontSize: '16px',
      [theme.breakpoints.down('md')]: {
        fontSize: '15px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
    '& fieldset': {
      border: 'none',
    },
  }),
);
