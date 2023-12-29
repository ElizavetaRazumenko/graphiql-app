import { Theme, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
export const WelcomeLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
  fontSize: '1.4rem',
  '&:hover': {
    color: theme.palette.primary.contrastText,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));
