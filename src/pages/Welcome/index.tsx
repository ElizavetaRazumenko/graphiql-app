import { Wrapper } from '../../components/Wrapper';
import { Button, Typography } from '@mui/material';
import { Subtitle } from '../../components/Subtitle';
import { useState } from 'react';

const Welcome = () => {
  const [isHasError, setIsHasError] = useState<boolean>(false);
  if (isHasError) {
    throw Error('Application error');
  }
  return (
    <Wrapper>
      <Typography variant="h1">
        Welcome to our final project GraphiQL
      </Typography>
      <Subtitle variant="subtitle1">
        We are very pleased to have taken part in this course and reached the
        finals. Team unity, perseverance and determination helped us overcome
        all difficulties and problems. And now we are proud to present our
        project to your attention. Enjoy!
      </Subtitle>
      <Button variant="contained" onClick={() => setIsHasError(true)}>
        Submit
      </Button>
    </Wrapper>
  );
};

export default Welcome;
