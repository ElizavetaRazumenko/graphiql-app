import { IconButton, IconButtonProps } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { Theme, styled } from '@mui/material/styles';

const ButtonWithIcon = (props: IconButtonProps) => (
  <IconButton {...props}>
    <MenuRoundedIcon sx={{ color: '#fff' }} />
  </IconButton>
);

export const DocumentationButton = styled(ButtonWithIcon)<IconButtonProps>(
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
