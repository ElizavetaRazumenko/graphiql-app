import { styled } from '@mui/material/styles';

export const TabPanel = styled('div')<{ opened: string }>(
  ({ opened }: { opened: string }) => ({
    transition: '.3s ease',
    overflow: 'hidden',
    height: opened === 'true' ? '300px' : '0px',
  }),
);
