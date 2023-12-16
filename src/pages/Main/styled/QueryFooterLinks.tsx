import MaterialStack, {
  StackProps as MaterialStackProps,
} from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const QueryFooterLinks = styled(MaterialStack)<MaterialStackProps>(
  () => ({
    position: 'relative',

    '& > .MuiLink-root': {
      color: '#fff',
    },
  }),
);
