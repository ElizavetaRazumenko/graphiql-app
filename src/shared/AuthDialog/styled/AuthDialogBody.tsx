import { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { styled, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';

export const AuthDialogBody = styled(Box)<MaterialBoxProps>(
  ({ theme }: { theme: Theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.39)',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '10px',
      padding: '36px 24px',
    },
    [theme.breakpoints.up('sm')]: {
      borderRadius: '30px',
      padding: '42px 36px',
    },
    '& form': {
      display: 'flex',
      flexDirection: 'column',
      gap: '36px',
      alignItems: 'center',
    },
  }),
);
