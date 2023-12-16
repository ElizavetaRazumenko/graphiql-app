import MaterialContainer, {
  ContainerProps as MaterialContainerProps,
} from '@mui/material/Container';
import { styled } from '@mui/material/styles';

export const QueryFooter = styled(MaterialContainer)<MaterialContainerProps>(
  () => ({
    padding: '0 20px',
    maxWidth: '2050px',
  }),
);
