import { Theme, styled } from '@mui/material/styles';

export const QueryResult = styled('textarea')(
  ({ theme }: { theme: Theme }) => ({
    width: '100%',
    height: '100%',

    border: 'none',
    background: 'none',
    color: theme.palette.primary.main,
    fontSize: '20px',
    outline: 'none',
    resize: 'none',

    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  }),
);
