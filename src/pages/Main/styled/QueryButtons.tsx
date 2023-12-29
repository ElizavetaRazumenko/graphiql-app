import Stack, { StackProps as MaterialStackProps } from '@mui/material/Stack';
import { Theme, styled } from '@mui/material/styles';

export const QueryButtons = styled(Stack)<MaterialStackProps>(
  ({ theme }: { theme: Theme }) => ({
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    gap: '25px',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      gap: '15px',
    },

    '& .MuiStack-root, & .MuiTypography-root': {
      marginBottom: '26px',
      [theme.breakpoints.down('md')]: {
        marginBottom: '12px',
      },
    },
    '& button': {
      marginBottom: '20px',
    },
  }),
);
