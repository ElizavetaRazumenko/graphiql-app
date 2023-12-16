import { styled } from '@mui/material/styles';

export const QueryFooterWindow = styled('pre')<{ opened: boolean }>(
  ({ opened }) => ({
    margin: '20px 0',
    overflow: 'auto',
    transition: '.3s ease',
    height: opened ? '200px' : '0px',
  }),
);
