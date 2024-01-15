import { Theme, styled } from '@mui/material/styles';
import { Button } from '../../../shared/Button';

export const ChangeEndpoint = styled(Button)(({ theme }: { theme: Theme }) => ({
  minWidth: '90px',
  boxSizing: 'content-box',
  padding: '10px 10px',
  fontSize: '13px !important',
  lineHeight: '1.3rem',

  [theme.breakpoints.down('md')]: {
    padding: '8px 22px',
    maxWidth: '100%',
    whiteSpace: 'nowrap',
  },
}));
