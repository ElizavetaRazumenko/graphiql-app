import MaterialTypography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';
import { Theme, styled } from '@mui/material/styles';

export const PersonName = styled(MaterialTypography)<MaterialTypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    padding: '0',
    textAlign: 'left',
    fontSize: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  }),
);
