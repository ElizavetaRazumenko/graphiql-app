import Typography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';
import { Theme, styled } from '@mui/material/styles';

export const Error404 = styled(Typography)<MaterialTypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    textAlign: 'center',
    fontSize: '10rem',

    [theme.breakpoints.down('sm')]: {
      fontSize: '6rem',
    },
  }),
);
