import MaterialLink, {
  LinkProps as MaterialLinkProps,
} from '@mui/material/Link';
import { Theme, styled } from '@mui/material/styles';

const Link = styled(MaterialLink)<MaterialLinkProps>(
  ({ theme }: { theme: Theme }) => ({
    textDecoration: 'none',
    color: '#000',
    fontSize: '24px',
    transition: '.2s ease',
    cursor: 'pointer',
    '&:hover': {
      textShadow: '0px 0px 2px #000',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '22px',
    },
  }),
);

export default Link;
