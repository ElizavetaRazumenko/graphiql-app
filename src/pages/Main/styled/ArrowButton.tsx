import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const ArrowButton = styled(MaterialButton)<MaterialButtonProps>(() => ({
  position: 'absolute',
  right: '0px',
  padding: '5px',
  borderRadius: '50px',
  minWidth: '0',
}));
