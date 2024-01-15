import { IconButton, IconButtonProps } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

import { styled } from '@mui/material/styles';

const ButtonWithIcon = (props: IconButtonProps) => (
  <IconButton {...props}>
    <AutoFixHighIcon sx={{ fontSize: 30, color: '#fff' }} />
  </IconButton>
);

export const PrettifyButton = styled(ButtonWithIcon)<IconButtonProps>(() => ({
  padding: '5px',
  minWidth: '0px',
  borderRadius: '50px',
}));
