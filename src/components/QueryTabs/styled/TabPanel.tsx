import { styled } from '@mui/material/styles';

export const TabPanel = styled('div')<{ opened: string }>(
  ({ opened }: { opened: string }) => ({
    overflow: 'auto',
    transition: '.3s ease',
    height: opened === 'true' ? '200px' : '0px',
  }),
);
