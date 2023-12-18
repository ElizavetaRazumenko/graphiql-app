import MaterialTypography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const Endpoint = styled(MaterialTypography)<MaterialTypographyProps>(
  () => ({
    fontSize: '16px',
  }),
);
