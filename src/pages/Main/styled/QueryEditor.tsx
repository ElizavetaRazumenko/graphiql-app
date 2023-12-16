import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const QueryEditor = styled(MaterialBox)<MaterialBoxProps>(() => ({
  padding: '16px 72px 80px 50px',
  borderBottom: '5px solid #fff',
}));
