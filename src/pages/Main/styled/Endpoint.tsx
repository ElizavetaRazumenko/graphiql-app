import MaterialTypography, {
  TypographyProps as MaterialTypographyProps,
} from '@mui/material/Typography';
import { Theme, styled } from '@mui/material/styles';

export const Endpoint = styled(MaterialTypography)<MaterialTypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    textAlign: 'center',
    flex: '1 0 auto',
    overflow: 'hidden',
    maxWidth: '300px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '16px',

    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  }),
);
