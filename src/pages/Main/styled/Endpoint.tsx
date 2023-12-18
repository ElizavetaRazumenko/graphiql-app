import MaterialTypography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const Endpoint = styled(MaterialTypography)<MaterialTypographyProps>(
  () => ({
    textAlign: 'center',
    flex: '1 0 auto',
    overflow: 'hidden',
    maxWidth: '300px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '16px',
  }),
);
