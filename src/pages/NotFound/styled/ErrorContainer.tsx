import Stack, { StackProps as MaterialStackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
export const ErrorContainer = styled(Stack)<MaterialStackProps>(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}));
