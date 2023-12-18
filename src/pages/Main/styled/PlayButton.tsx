import { IconButton, IconButtonProps } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import { styled } from '@mui/material/styles';

const ButtonWithIcon = (props: IconButtonProps) => (
  <IconButton {...props}>
    <PlayCircleIcon sx={{ fontSize: 40, color: '#fff' }} />
  </IconButton>
);

export const PlayButton = styled(ButtonWithIcon)<IconButtonProps>(() => ({
  padding: '0px',
  minWidth: '0px',
  borderRadius: '50px',
}));
