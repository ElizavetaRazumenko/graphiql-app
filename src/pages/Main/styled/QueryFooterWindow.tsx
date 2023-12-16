import { Theme, styled } from '@mui/material/styles';

export const QueryFooterWindow = styled('textarea')<{ opened: string }>(
  ({ opened, theme }: { theme: Theme; opened: string }) => ({
    margin: '20px 0',
    padding: '0px',
    overflow: 'auto',
    transition: '.3s ease',
    height: opened === 'true' ? '200px' : '0px',
    fontSize: '20px',
    resize: 'none',
    background: 'none',
    border: 'none',
    outline: 'none',
    color: '#fff',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  }),
);
