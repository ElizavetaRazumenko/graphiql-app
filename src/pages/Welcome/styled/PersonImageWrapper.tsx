import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const PersonImageWrapper = styled(MaterialBox)<MaterialBoxProps>(() => ({
  flex: '1 0 33%',

  height: '350px',
}));
