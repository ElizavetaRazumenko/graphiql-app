import { Box, Stack } from '@mui/material';
import { AuthDialog } from '../../shared/AuthDialog';
import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { useContext } from 'react';
import { localizationContext } from '../../context/localizationContext';

const Registration = () => {
  const {
    currentLocalization: {
      registrationPage: {
        title,
        name,
        email,
        password,
        passwordRepeat,
        submit,
      },
    },
  } = useContext(localizationContext);

  return (
    <AuthDialog title={title}>
      <Box component="form">
        <Stack gap={4}>
          <Input placeholder={name} variant="outlined" icon="user" />
          <Input placeholder={email} variant="outlined" icon="email" />
          <Input
            placeholder={password}
            variant="outlined"
            type="password"
            icon="pass"
          />
          <Input
            placeholder={passwordRepeat}
            variant="outlined"
            type="password"
            icon="pass"
          />
        </Stack>
        <Button type="submit" variant="contained">
          {submit}
        </Button>
      </Box>
    </AuthDialog>
  );
};

export default Registration;
