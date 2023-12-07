import MaterialContainer, {
  ContainerProps as MaterialContainerProps,
} from '@mui/material/Container';
import { styled, Theme } from '@mui/material/styles';

export const Wrapper = styled(MaterialContainer)<MaterialContainerProps>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down('sm')]: {
      maxWidth: '200px',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '400px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '700px',
    },
  }),
);
