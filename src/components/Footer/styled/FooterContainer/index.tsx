import { StackProps as MaterialStackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

export const FooterContainer = styled(Stack)<MaterialStackProps>(() => ({
  maxWidth: '1140px',
  margin: '0 auto',
  padding: '0px 30px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
}));
