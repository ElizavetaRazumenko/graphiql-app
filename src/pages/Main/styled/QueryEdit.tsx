import { Theme, styled } from '@mui/material/styles';

export const QueryEdit = styled('textarea')(({ theme }: { theme: Theme }) => ({
  border: 'none',
  background: 'none',
  color: theme.palette.primary.main,
  fontSize: '20px',
  width: '100%',
  outline: 'none',
  resize: 'none',
  flex: '1 0 auto',
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));
