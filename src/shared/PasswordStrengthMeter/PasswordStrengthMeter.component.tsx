import { Stack, Typography } from '@mui/material';
import ProgressBar from './styled/ProgressBar';
import { useEffect, useState } from 'react';
import getPasswordStrength from '../../utils/getPasswordStrength';

export type PasswordStrengthMeterProps = {
  password: string;
};

const grades: Array<string> = [
  'very weak',
  'weak',
  'medium',
  'good',
  'strong',
  'very strong',
];

const PasswordStrengthMeter = ({
  password,
}: PasswordStrengthMeterProps): JSX.Element => {
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  useEffect(() => {
    setPasswordStrength(getPasswordStrength(password.trim()));
  }, [password]);

  return (
    <Stack gap={0.5} marginTop={'-10px'}>
      <Typography fontSize={'12px'}>
        password strength: {grades[passwordStrength]}
      </Typography>
      <ProgressBar
        variant="determinate"
        value={20 * passwordStrength}
        strength={passwordStrength}
      />
    </Stack>
  );
};

export default PasswordStrengthMeter;
