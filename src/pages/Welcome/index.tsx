import { WelcomeTitle, WelcomeWrapper } from './styled';
import { WelcomeSubtitle } from './styled/WelcomeSubtitle';

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <WelcomeTitle variant="h1">
        Welcome to our final project GraphiQL
      </WelcomeTitle>
      <WelcomeSubtitle variant="subtitle1">
        We are very pleased to have taken part in this course and reached the
        finals. Team unity, perseverance and determination helped us overcome
        all difficulties and problems. And now we are proud to present our
        project to your attention. Enjoy!
      </WelcomeSubtitle>
      <WelcomeSubtitle variant="subtitle1">
        Our project was written using React + Vite and meets all the criteria
        specified in the conditions for completing this task
      </WelcomeSubtitle>
      <WelcomeSubtitle variant="subtitle1">
        And now a little about the team member:
      </WelcomeSubtitle>
    </WelcomeWrapper>
  );
};

export default Welcome;
