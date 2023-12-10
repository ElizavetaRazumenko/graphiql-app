import { ContainerProps as MaterialContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FooterWrapper = styled(Box)<MaterialContainerProps>(() => ({
  background: '#fff',
  padding: '20px 0',
}));
