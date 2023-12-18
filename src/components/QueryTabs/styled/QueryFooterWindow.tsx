import { Theme, styled } from '@mui/material/styles';

export const QueryFooterWindow = styled('textarea')(
  ({ theme }: { theme: Theme }) => ({
    margin: '20px 0',
    padding: '0px',
    overflow: 'auto',
    fontSize: '20px',
    resize: 'none',
    background: 'none',
    border: 'none',
    outline: 'none',
    color: theme.palette.primary.main,
    width: '100%',
    height: '100%',

    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  }),
);
