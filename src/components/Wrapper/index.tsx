import MaterialContainer, {
  ContainerProps as MaterialContainerProps,
} from '@mui/material/Container';
import { styled, Theme } from '@mui/material/styles';

export const Wrapper = styled(MaterialContainer)<MaterialContainerProps>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down('sm')]: {
      maxWidth: '280px',
      padding: '32px 0',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '400px',
      padding: '20px 0',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '700px',
      padding: '20px 0',
    },
  }),
);
