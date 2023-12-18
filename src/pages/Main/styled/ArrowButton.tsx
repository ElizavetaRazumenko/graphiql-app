import { IconButton, IconButtonProps } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Theme, styled } from '@mui/material/styles';

const ButtonWithIcon = (props: IconButtonProps) => (
  <IconButton {...props}>
    <KeyboardArrowDownRoundedIcon sx={{ fontSize: 40, color: '#fff' }} />
  </IconButton>
);

export const ArrowButton = styled(ButtonWithIcon)<
  IconButtonProps & { opened: string }
>(({ theme, opened }: { theme: Theme; opened: string }) => ({
  transform: `rotate(${opened === 'true' ? '0' : '180'}deg)`,
  position: 'absolute',
  right: '0px',
  padding: '5px',
  borderRadius: '50px',
  minWidth: '0px',
  top: '0px',

  [theme.breakpoints.down('md')]: {
    top: '-40px',
    padding: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
}));
