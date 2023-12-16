import Stack, { StackProps as MaterialStackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const QueryButtons = styled(Stack)<MaterialStackProps>(() => ({
  alignItems: 'center',
  justifyContent: 'space-between',
}));
