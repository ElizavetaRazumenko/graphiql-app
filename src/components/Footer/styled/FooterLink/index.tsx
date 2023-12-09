import MaterialLink, {
  LinkProps as MaterialLinkProps,
} from '@mui/material/Link';
import { styled } from '@mui/material/styles';

export const FooterLink = styled(MaterialLink)<MaterialLinkProps>(() => ({
  textDecoration: 'none',
  color: '#000',
  fontSize: '16px',
}));
