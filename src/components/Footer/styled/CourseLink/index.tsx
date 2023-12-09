import Stack, { StackProps as MaterialStackProps } from '@mui/material/Stack';
import { Theme, styled } from '@mui/material/styles';

export const CourseLink = styled(Stack)<MaterialStackProps>(
  ({ theme }: { theme: Theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      gap: '15px',
    },
    [theme.breakpoints.up('md')]: {
      gap: '60px',
    },
  }),
);
