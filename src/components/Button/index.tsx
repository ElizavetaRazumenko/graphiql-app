import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@mui/material/Button';
import { styled, Theme } from '@mui/material/styles';

export const Button = styled(MaterialButton)<MaterialButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    borderRadius: '20px',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
    '&:hover': {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.primary.main,
    },
  }),
);
