import {
  PersonCard,
  PersonImage,
  PersonImageWrapper,
  WelcomeTitle,
  WelcomeWrapper,
  PersonDescription,
  WelcomeSubtitle,
} from './styled';

import Liza from '../../assets/Liza.jpg';
import Vitalik from '../../assets/Vitalik.jpg';
import Lesha from '../../assets/Lesha.jpg';

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <WelcomeTitle>Welcome to our final project GraphiQL</WelcomeTitle>
      <WelcomeSubtitle>
        We are very pleased to have taken part in this course and reached the
        finals. Team unity, perseverance and determination helped us overcome
        all difficulties and problems. And now we are proud to present our
        project to your attention. Enjoy!
      </WelcomeSubtitle>
      <WelcomeSubtitle>
        Our project was written using React + Vite and meets all the criteria
        specified in the conditions for completing this task
      </WelcomeSubtitle>
      <WelcomeSubtitle>And now a little about the team member:</WelcomeSubtitle>

      <PersonCard>
        <PersonImageWrapper>
          <PersonImage src={Liza} />
        </PersonImageWrapper>
        <PersonDescription>
          I&nbsp;graduated from BNTU with a&nbsp;degree in&nbsp;engineering,
          I&nbsp;have always loved exact sciences, but&nbsp;I also have many
          creative hobbies. Front-end development has helped me&nbsp;realize
          myself in&nbsp;both directions&nbsp;&mdash; analytical and creative;
          I&nbsp;am inspired by&nbsp;what I&nbsp;do. And I&nbsp;hope this hobby
          will become the main occupation of&nbsp;my&nbsp;life
        </PersonDescription>
      </PersonCard>
      <PersonCard>
        <PersonImageWrapper>
          <PersonImage src={Vitalik} />
        </PersonImageWrapper>
        <PersonDescription>
          Per Sir Arthur C. Clarke, any sufficiently advanced technology
          is&nbsp;indistinguishable from magic. So&nbsp;let me&nbsp;consider
          myself as&nbsp;an&nbsp;IT wizard 😊. My&nbsp;ultimate goal
          is&nbsp;to&nbsp;enlighten the world with the most advanced magic and
          bring satisfaction and happiness to&nbsp;every user. Bugs shall not
          pass!
        </PersonDescription>
      </PersonCard>
      <PersonCard>
        <PersonImageWrapper>
          <PersonImage src={Lesha} />
        </PersonImageWrapper>
        <PersonDescription>
          I&nbsp;graduated from the Minsk College of&nbsp;Business
          in&nbsp;Minsk, I&nbsp;have been doing programming for more than
          a&nbsp;year, I&nbsp;like different sports and a&nbsp;lot of&nbsp;tea.
          I&rsquo;m not sitting still, trying to&nbsp;get into the&nbsp;IT.
          I&nbsp;hope to&nbsp;become a&nbsp;first-class developer and
          a&nbsp;good person in&nbsp;the near future!
        </PersonDescription>
      </PersonCard>
    </WelcomeWrapper>
  );
};

export default Welcome;
