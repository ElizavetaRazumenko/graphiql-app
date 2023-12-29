import Box, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ChangeEndpointContainer = styled(Box)<MaterialBoxProps>(() => ({
  width: '100%',
  '& > .MuiFormControl-root': {
    width: '100%',
  },
}));
