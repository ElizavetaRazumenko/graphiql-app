import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { Theme, styled } from '@mui/material/styles';

export const ModalContainer = styled(MaterialBox)<
  MaterialBoxProps & { opened: string }
>(({ theme, opened }: { theme: Theme; opened: string }) => ({
  borderRadius: '30px',
  background: theme.palette.primary.main,
  padding: '100px 25px 80px 65px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

  maxWidth: '450px',
  height: '90vh',
  zIndex: 100,
  position: 'fixed',
  top: '50%',
  transition: '.3s ease',
  right: opened === 'true' ? '25px' : '-100%',
  transform: `translate(0, -45%)`,
  display: 'block',

  [theme.breakpoints.down('sm')]: {
    display: opened === 'true' ? 'block' : 'none',
    position: 'static',
    transform: `translate(0, 0)`,
  },
}));
