import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const PlayButton = styled(MaterialButton)<MaterialButtonProps>(() => ({
  padding: '0px',
  minWidth: '0px',
  borderRadius: '50px',
}));
