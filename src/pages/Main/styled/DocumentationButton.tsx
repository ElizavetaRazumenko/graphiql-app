import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@mui/material/Button';
import { Theme, styled } from '@mui/material/styles';

export const DocumentationButton = styled(MaterialButton)<MaterialButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    position: 'absolute',
    top: '0px',
    right: '0px',

    padding: '5px',
    borderRadius: '50px',
    border: `1px solid ${theme.palette.primary.main}`,
    minWidth: '0px',
  }),
);
