import { ContainerProps as MaterialContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FooterContainer = styled(Box)<MaterialContainerProps>(() => ({
  maxWidth: '1140px',
  margin: '0 auto',
}));
