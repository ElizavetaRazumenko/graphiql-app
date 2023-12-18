import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonWithIcon = (props: IconButtonProps) => (
  <IconButton {...props}>
    <CloseRoundedIcon
      sx={{
        color: '#000',
      }}
    />
  </IconButton>
);

export const CloseModalButton = styled(ButtonWithIcon)<IconButtonProps>(() => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
}));
