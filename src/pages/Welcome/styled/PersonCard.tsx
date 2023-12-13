import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { styled, Theme } from '@mui/material/styles';

export const PersonCard = styled(MaterialBox)<MaterialBoxProps>(
  ({ theme }: { theme: Theme }) => ({
    marginBottom: '100px',
    display: 'flex',
    flexDirection: 'row',
    gap: '70px',
    padding: '45px',
    borderRadius: '30px',
    background: 'rgba(255, 255, 255, 0.14)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
      gap: '16px',
      marginBottom: '45px',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: '30px',
      gap: '30px',
      marginBottom: '60px',
    },
  }),
);
