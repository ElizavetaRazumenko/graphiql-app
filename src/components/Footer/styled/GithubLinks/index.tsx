import Stack, { StackProps as MaterialStackProps } from '@mui/material/Stack';
import { Theme, styled } from '@mui/material/styles';

export const GithubLinks = styled(Stack)<MaterialStackProps>(
  ({ theme }: { theme: Theme }) => ({
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '50px',
    [theme.breakpoints.down('sm')]: {
      gap: '15px',
      flexDirection: 'column',
    },
  }),
);
