import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const DocumentationButton = styled(MaterialButton)<MaterialButtonProps>(
  () => ({
    position: 'absolute',
    top: '0px',
    right: '0px',

    padding: '5px',
    borderRadius: '50px',
    border: '1px solid #fff',
    minWidth: '0px',
  }),
);
