import { Stack, Typography } from '@mui/material';
import ProgressBar from './styled/ProgressBar';
import { useContext, useEffect, useState } from 'react';
import getPasswordStrength from '../../utils/getPasswordStrength';
import { percentsPerGrade } from '../constants';
import { localizationContext } from '../../context/localizationContext';

export type PasswordStrengthMeterProps = {
  password: string;
};

const PasswordStrengthMeter = ({
  password,
}: PasswordStrengthMeterProps): JSX.Element => {
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  useEffect(() => {
    setPasswordStrength(getPasswordStrength(password.trim()));
  }, [password]);

  const {
    currentLocalization: {
      registrationPage: { passwordStrengthText, grades },
    },
  } = useContext(localizationContext);

  return (
    <Stack gap={0.5} marginTop={'-10px'}>
      <Typography fontSize={'12px'}>
        {passwordStrengthText}: {grades[passwordStrength]}
      </Typography>
      <ProgressBar
        variant="determinate"
        value={percentsPerGrade * passwordStrength}
        strength={passwordStrength}
      />
    </Stack>
  );
};

export default PasswordStrengthMeter;
