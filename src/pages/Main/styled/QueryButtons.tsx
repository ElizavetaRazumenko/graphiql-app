import Stack, { StackProps as MaterialStackProps } from '@mui/material/Stack';
import { Theme, styled } from '@mui/material/styles';

export const QueryButtons = styled(Stack)<MaterialStackProps>(
  ({ theme }: { theme: Theme }) => ({
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
    gap: '25px',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  }),
);
