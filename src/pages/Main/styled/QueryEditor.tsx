import MaterialStack, {
  StackProps as MaterialStackProps,
} from '@mui/material/Stack';
import { Theme, styled } from '@mui/material/styles';

export const QueryEditor = styled(MaterialStack)<MaterialStackProps>(
  ({ theme }: { theme: Theme }) => ({
    padding: '16px 52px 20px 42px',
    borderBottom: `5px solid ${theme.palette.primary.main}`,

    [theme.breakpoints.down('md')]: {
      padding: '20px',
    },
  }),
);
