import { Wrapper } from '../../components/Wrapper';
import { Button, Typography } from '@mui/material';
import { Subtitle } from '../../components/Subtitle';

const Welcome = () => {
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
      <Button
        variant="contained"
        onClick={() => {
          alert('Hello World!');
        }}
      >
        Submit
      </Button>
    </Wrapper>
  );
};

export default Welcome;
