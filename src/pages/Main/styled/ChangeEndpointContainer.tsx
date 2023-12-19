import Stack, { StackProps as MaterialStackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
export const ChangeEndpointContainer = styled(Stack)<MaterialStackProps>(
  () => ({
    alignItems: 'center',
    width: '100%',
    '& > .MuiFormControl-root': {
      width: '100%',
    },
  }),
);
