import Typography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';
import { Theme, styled } from '@mui/material/styles';

export const ErrorMessage = styled(Typography)<MaterialTypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    textAlign: 'center',
    fontSize: '2.4rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  }),
);
