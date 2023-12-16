import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { Theme, styled } from '@mui/material/styles';

export const QueryFooter = styled(MaterialBox)<MaterialBoxProps>(
  ({ theme }: { theme: Theme }) => ({
    padding: '30px 72px 45px 50px',

    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
  }),
);
