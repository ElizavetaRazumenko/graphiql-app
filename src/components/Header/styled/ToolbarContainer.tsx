import MaterialToolbar, {
  ToolbarProps as MaterialToolbarProps,
} from '@mui/material/Toolbar';
import { styled, Theme } from '@mui/material/styles';

export const ToolbarContainer = styled(MaterialToolbar)<MaterialToolbarProps>(
  ({ theme }: { theme: Theme }) => ({
    justifyContent: 'space-between',
    maxWidth: '1140px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0 30px',
    },
    '&.MuiToolbar-root': {
      minHeight: '32px',
    },
    '& a': {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '18px',
      },
    },
  }),
);
