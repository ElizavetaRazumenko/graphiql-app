import { Theme, styled } from '@mui/material/styles';

export const Logo = styled('img')(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '85px',
  },
}));
