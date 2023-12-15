import { Box, Stack } from '@mui/material';
import { useContext } from 'react';
import { localizationContext } from '../../context/localizationContext';
import { AuthDialog } from '../../shared/AuthDialog';
import { Button } from '../../shared/Button';
import { Input } from '../../shared/Input';

const Login = () => {
  const {
    currentLocalization: {
      loginPage: { title, email, password, submit },
    },
  } = useContext(localizationContext);

  return (
    <AuthDialog title={title}>
      <Box component="form">
        <Stack gap={4}>
          <Input placeholder={email} variant="outlined" icon="email" />
          <Input
            placeholder={password}
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

export default Login;
