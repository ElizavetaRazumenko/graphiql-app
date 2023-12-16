import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ModalList = styled(MaterialBox)<MaterialBoxProps>(() => ({
  '&::-webkit-scrollbar': {
    width: '12px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'white',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'black',
    borderRadius: '50px',
  },
  overflow: 'auto',
  height: '100%',

  paddingRight: '25px',
  color: '#000',
}));
