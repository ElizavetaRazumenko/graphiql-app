import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ModalList = styled(MaterialBox)<MaterialBoxProps>(() => ({
  overflow: 'auto',
  height: '100%',

  paddingRight: '25px',
  color: '#000',
}));
