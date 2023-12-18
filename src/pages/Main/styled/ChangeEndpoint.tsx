import { Theme, styled } from '@mui/material/styles';
import { Button } from '../../../shared/Button';

export const ChangeEndpoint = styled(Button)(({ theme }: { theme: Theme }) => ({
  maxWidth: '120px',
  padding: '0 5px',
  fontSize: '13px !important',

  [theme.breakpoints.down('md')]: {
    padding: '5px 20px',
    maxWidth: 'none',
    whiteSpace: 'nowrap',
  },
}));
