import MaterialBox, { BoxProps as MaterialBoxProps } from '@mui/material/Box';
import { styled, Theme } from '@mui/material/styles';

export const ModalList = styled(MaterialBox)<MaterialBoxProps>(
  ({ theme }: { theme: Theme }) => ({
    overflow: 'auto',
    height: '100%',
    paddingRight: '25px',
    '& p': {
      padding: '6px',
      color: theme.palette.primary.contrastText,
    },
    '& .MuiAccordionDetails-root p:nth-of-type(odd)': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
  }),
);
