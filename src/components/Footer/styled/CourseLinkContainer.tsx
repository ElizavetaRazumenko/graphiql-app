import Stack, { StackProps as MaterialStackProps } from '@mui/material/Stack';
import { Theme, styled } from '@mui/material/styles';

export const CourseLinkContainer = styled(Stack)<MaterialStackProps>(
  ({ theme }: { theme: Theme }) => ({
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '60px',
    [theme.breakpoints.down('sm')]: {
      gap: '15px',
      flexDirection: 'column-reverse',
    },
    [theme.breakpoints.down('md')]: {
      gap: '30px',
    },
  }),
);
