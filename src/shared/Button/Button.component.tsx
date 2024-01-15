import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@mui/material/Button';
import { styled, Theme } from '@mui/material/styles';

const Button = styled(MaterialButton)<MaterialButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    borderRadius: '20px',
    textTransform: 'none',
    paddingLeft: '46px',
    paddingRight: '46px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
    '&:hover': {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.primary.main,
    },
  }),
);

export default Button;
