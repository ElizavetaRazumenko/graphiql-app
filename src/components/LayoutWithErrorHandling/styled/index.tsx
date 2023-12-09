import MaterialContainer, {
  ContainerProps as MaterialContainerProps,
} from '@mui/material/Container';
import { styled } from '@mui/material/styles';

export const MainWrapper = styled(MaterialContainer)<MaterialContainerProps>(
  () => ({
    flex: '1 0 auto',
  }),
);
