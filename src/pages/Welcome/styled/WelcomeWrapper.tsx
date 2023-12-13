import MaterialContainer, {
  ContainerProps as MaterialContainerProps,
} from '@mui/material/Container';
import { styled, Theme } from '@mui/material/styles';

export const WelcomeWrapper = styled(MaterialContainer)<MaterialContainerProps>(
  ({ theme }: { theme: Theme }) => ({
    margin: '150px 0 420px',
    [theme.breakpoints.down('sm')]: {
      margin: '50px 0',
      padding: '0 70px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: '683px',
      margin: '115px 0 100px',
      padding: '0 120px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxWidth: '1052px',
    },
  }),
);
