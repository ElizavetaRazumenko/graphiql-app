import { Theme, styled } from '@mui/material/styles';

export const MainWrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  padding: '0 70px',
  maxWidth: '2050px',
  margin: '75px auto',

  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '100px',

  [theme.breakpoints.down('xl')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 20px',
    gap: '40px',
  },
}));
