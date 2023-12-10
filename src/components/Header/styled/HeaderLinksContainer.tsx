import Stack, { StackProps as MaterialStackProps } from '@mui/material/Stack';
import { Theme, styled } from '@mui/material/styles';

export const HeaderLinksContainer = styled(Stack)<MaterialStackProps>(
  ({ theme }: { theme: Theme }) => ({
    flexDirection: 'row',
    gap: '28px',
    [theme.breakpoints.down('sm')]: {
      gap: '5px',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
  }),
);
