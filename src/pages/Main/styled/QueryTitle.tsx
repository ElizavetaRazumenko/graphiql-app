import MaterialTypography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const QueryTitle = styled(MaterialTypography)<MaterialTypographyProps>(
  () => ({
    textAlign: 'center',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: '10px',
  }),
);
