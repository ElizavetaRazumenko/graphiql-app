import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MainWrapper = styled(MaterialBox)<MaterialBoxProps>(() => ({
  flex: '1 0 auto',
}));
