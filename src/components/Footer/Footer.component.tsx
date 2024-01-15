import { FooterContainer } from './styled';
import { GithubLinks } from './styled';
import { CourseLinkContainer } from './styled';
import { FooterWrapper } from './styled';
import logo from '../../assets/rs_school_logo.png';
import { Logo } from './styled';
import { Link } from '../../shared/Link';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <GithubLinks>
          <Link
            target="_blank"
            href="https://github.com/ElizavetaRazumenko"
            title="ElizavetaRazumenko"
          >
            Github
          </Link>
          <Link
            target="_blank"
            href="https://github.com/vpyadus"
            title="vpyadus"
          >
            Github
          </Link>
          <Link
            target="_blank"
            href="https://github.com/AlexeiIsProgrammer"
            title="AlexeiIsProgrammer"
          >
            Github
          </Link>
        </GithubLinks>

        <CourseLinkContainer>
          <Link>2023</Link>
          <Link target="_blank" href="https://rs.school/react/" title="Logo">
            <Logo src={logo} />
          </Link>
        </CourseLinkContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};
