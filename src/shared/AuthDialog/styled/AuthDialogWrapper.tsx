import { StackProps as MaterialStackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Stack, Theme } from '@mui/material';

export const AuthDialogWrapper = styled(Stack)<MaterialStackProps>(
  ({ theme }: { theme: Theme }) => ({
    alignItems: 'center',
    transition: '0.6s',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '50px',
      gap: '32px',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '70px',
      gap: '48px',
    },
    '& h1': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '32px',
      },
    },
  }),
);
