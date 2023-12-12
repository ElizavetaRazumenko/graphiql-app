import { Box, Stack } from '@mui/material';
import { AuthDialog } from '../../shared/AuthDialog';
import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';

const Registration = () => {
  return (
    <AuthDialog title="Registration">
      <Box component="form">
        <Stack gap={4}>
          <Input placeholder="Name" variant="outlined" icon="user" />
          <Input placeholder="Email" variant="outlined" icon="email" />
          <Input
            placeholder="Password"
            variant="outlined"
            type="password"
            icon="pass"
          />
          <Input
            placeholder="Repeat"
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

export default Registration;
