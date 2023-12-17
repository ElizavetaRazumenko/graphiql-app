import MaterialStack, {
  StackProps as MaterialStackProps,
} from '@mui/material/Stack';
import { Theme, styled } from '@mui/material/styles';

export const QueryFooterLinks = styled(MaterialStack)<MaterialStackProps>(
  ({ theme }: { theme: Theme }) => ({
    position: 'relative',
    gap: '100px',

    '& > .MuiLink-root': {
      color: theme.palette.primary.main,
    },

    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
      gap: '30px',
      justifyContent: 'center',
    },
  }),
);
