import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { Theme, styled } from '@mui/material/styles';

export const QueryEditor = styled(MaterialBox)<MaterialBoxProps>(
  ({ theme }: { theme: Theme }) => ({
    padding: '16px 72px 80px 50px',
    borderBottom: `5px solid ${theme.palette.primary.main}`,

    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
  }),
);
