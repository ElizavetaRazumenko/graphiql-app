import { Box, Stack } from '@mui/material';
import { AuthDialog } from '../../shared/AuthDialog';
import { Button } from '../../shared/Button';
import { Input } from '../../shared/Input';

const Login = () => {
  return (
    <AuthDialog title="Login">
      <Box component="form">
        <Stack gap={4}>
          <Input placeholder="Email" variant="outlined" icon="email" />
          <Input
            placeholder="Password"
            variant="outlined"
            type="password"
            icon="pass"
          />
        </Stack>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </AuthDialog>
  );
};

export default Login;
