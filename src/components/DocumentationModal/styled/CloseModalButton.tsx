import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const CloseModalButton = styled(MaterialButton)<MaterialButtonProps>(
  () => ({
    position: 'absolute',
    top: '20px',
    right: '20px',
  }),
);
