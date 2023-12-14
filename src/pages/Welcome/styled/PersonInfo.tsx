import MaterialTypography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const PersonInfo = styled(MaterialTypography)<MaterialTypographyProps>(
  () => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px',
  }),
);
