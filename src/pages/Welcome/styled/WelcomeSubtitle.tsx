import MaterialTypography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';
import { Theme, styled } from '@mui/material/styles';

export const WelcomeSubtitle = styled(
  MaterialTypography,
)<MaterialTypographyProps>(({ theme }: { theme: Theme }) => ({
  padding: '0',
  marginBottom: '35px',
  fontSize: '22px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));
