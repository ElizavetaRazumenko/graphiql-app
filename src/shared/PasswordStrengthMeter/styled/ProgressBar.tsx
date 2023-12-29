import { LinearProgress, LinearProgressProps } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

const ProgressBar = styled(LinearProgress)<
  LinearProgressProps & { strength: number }
>(({ theme, strength }: { theme: Theme; strength: number }) => {
  const colorStages: Array<string> = [
    theme.palette.primary.main,
    theme.palette.error.main,
    theme.palette.error.main,
    theme.palette.warning.main,
    theme.palette.info.main,
    theme.palette.success.main,
  ];
  return {
    height: '10px',
    borderRadius: '5px',
    '& .MuiLinearProgress-bar': {
      borderRadius: 5,
      backgroundColor: colorStages[strength],
    },
  };
});

export default ProgressBar;
