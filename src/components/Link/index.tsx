import MaterialLink, {
  LinkProps as MaterialLinkProps,
} from '@mui/material/Link';
import { styled } from '@mui/material/styles';

export const Link = styled(MaterialLink)<MaterialLinkProps>(() => ({
  textDecoration: 'none',
  color: '#000',
}));
