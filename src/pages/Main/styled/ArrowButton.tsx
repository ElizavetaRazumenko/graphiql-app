import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const ArrowButton = styled(MaterialButton)<
  MaterialButtonProps & { opened: boolean }
>(({ opened }) => ({
  transform: `rotate(${opened ? '0' : '180'}deg)`,
  position: 'absolute',
  right: '0px',
  padding: '5px',
  borderRadius: '50px',
  minWidth: '0',
}));
