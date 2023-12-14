import { styled, Theme } from '@mui/material/styles';

import MaterialTypography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';

export const PersonDescription = styled(
  MaterialTypography,
)<MaterialTypographyProps>(({ theme }: { theme: Theme }) => ({
  fontSize: '20px',
  lineHeight: '1.7em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));
