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
  transform: `rotate(${Number(opened === 'false') * 180}deg)`,
  position: 'absolute',
  right: '0px',
  padding: '5px',
  borderRadius: '50px',
  minWidth: '0px',
  top: '0px',
  transition: '.3s ease',

  [theme.breakpoints.down('md')]: {
    transition: 'none',
    top: '-40px',
    padding: '0px',
    left: `${Number(opened === 'false') * 50}%`,
    transform: `rotate(${Number(opened === 'false') * 180}deg) translateX(${
      Number(opened === 'false') * 50
    }%)`,
  },
}));
