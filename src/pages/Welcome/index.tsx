import {
  PersonCard,
  PersonImage,
  PersonImageWrapper,
  WelcomeTitle,
  WelcomeWrapper,
  PersonDescription,
  WelcomeSubtitle,
  PersonInfo,
  PersonName,
} from './styled';

import Liza from '../../assets/Liza.jpg';
import Vitalik from '../../assets/Vitalik.jpg';
import Lesha from '../../assets/Lesha.jpg';
import { useContext } from 'react';
import { localizationContext } from '../../context/localizationContext';

const Welcome = () => {
  const {
    currentLocalization: {
      welcomePage: {
        title,
        subscription_1,
        subscription_2,
        subscription_3,
        about_member_1,
        about_member_2,
        about_member_3,
      },
    },
  } = useContext(localizationContext);

  return (
    <WelcomeWrapper>
      <WelcomeTitle>{title}</WelcomeTitle>
      <WelcomeSubtitle>{subscription_1}</WelcomeSubtitle>
      <WelcomeSubtitle>{subscription_2}</WelcomeSubtitle>
      <WelcomeSubtitle>{subscription_3}</WelcomeSubtitle>

      <PersonCard>
        <PersonImageWrapper>
          <PersonImage src={Liza} />
        </PersonImageWrapper>
        <PersonInfo>
          <PersonName>{about_member_1.name}</PersonName>
          <PersonDescription>{about_member_1.description}</PersonDescription>
        </PersonInfo>
      </PersonCard>
      <PersonCard>
        <PersonImageWrapper>
          <PersonImage src={Vitalik} />
        </PersonImageWrapper>
        <PersonInfo>
          <PersonName>{about_member_2.name}</PersonName>
          <PersonDescription>{about_member_2.description}</PersonDescription>
        </PersonInfo>
      </PersonCard>
      <PersonCard>
        <PersonImageWrapper>
          <PersonImage src={Lesha} />
        </PersonImageWrapper>
        <PersonInfo>
          <PersonName>{about_member_3.name}</PersonName>
          <PersonDescription>{about_member_3.description}</PersonDescription>
        </PersonInfo>
      </PersonCard>
    </WelcomeWrapper>
  );
};

export default Welcome;
