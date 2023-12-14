import MaterialContainer, {
  ContainerProps as MaterialContainerProps,
} from '@mui/material/Container';
import { styled, Theme } from '@mui/material/styles';

export const WelcomeWrapper = styled(MaterialContainer)<MaterialContainerProps>(
  ({ theme }: { theme: Theme }) => ({
    margin: '150px 0 320px',
    [theme.breakpoints.down('sm')]: {
      margin: '50px 0',
      padding: '0 20px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      margin: '115px 0 100px',
      padding: '0 90px',
    },
  }),
);
