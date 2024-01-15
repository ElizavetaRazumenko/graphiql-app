import MaterialTypography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';
import { Theme, styled } from '@mui/material/styles';

export const WelcomeTitle = styled(MaterialTypography)<MaterialTypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '57px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  }),
);
