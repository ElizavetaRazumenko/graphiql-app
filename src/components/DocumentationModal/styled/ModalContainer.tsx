import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { Theme, styled } from '@mui/material/styles';

export const ModalContainer = styled(MaterialBox)<MaterialBoxProps>(
  ({ theme }: { theme: Theme }) => ({
    borderRadius: '30px',
    background: theme.palette.primary.main,
    padding: '60px 15px 30px 30px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    width: '50vw',
    maxWidth: '550px',
    height: '80vh',
    zIndex: 100,
    position: 'fixed',
    top: '45%',
    transition: '.3s ease',
    right: '25px',
    transform: `translate(0, -45%)`,
    display: 'block',

    [theme.breakpoints.down('sm')]: {
      display: 'block',
      position: 'static',
      transform: `translate(0, 0)`,
      width: '85vw',
      maxWidth: '85vw',
    },
  }),
);
