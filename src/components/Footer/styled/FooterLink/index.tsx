import MaterialLink, {
  LinkProps as MaterialLinkProps,
} from '@mui/material/Link';
import { Theme, styled } from '@mui/material/styles';

export const FooterLink = styled(MaterialLink)<MaterialLinkProps>(
  ({ theme }: { theme: Theme }) => ({
    textDecoration: 'none',
    color: '#000',
    fontSize: '24px',
    transition: '.2s ease',
    ':hover': {
      textShadow: '0px 0px 2px #000',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  }),
);
