import { ContainerProps as MaterialContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Box, Theme } from '@mui/material';

export const FooterWrapper = styled(Box)<MaterialContainerProps>(
  ({ theme }: { theme: Theme }) => ({
    background: theme.palette.primary.main,
    padding: '20px 0',
  }),
);
