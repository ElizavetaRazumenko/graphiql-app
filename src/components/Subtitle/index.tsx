import MaterialTypography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const Subtitle = styled(MaterialTypography)<MaterialTypographyProps>(
  () => ({
    textAlign: 'left',
    padding: '40px 0',
  }),
);
