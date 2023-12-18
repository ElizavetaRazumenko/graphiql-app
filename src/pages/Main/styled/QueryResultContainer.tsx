import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const QueryResultContainer = styled(MaterialBox)<MaterialBoxProps>(
  () => ({
    position: 'relative',
    flex: '1 0 40%',
  }),
);
