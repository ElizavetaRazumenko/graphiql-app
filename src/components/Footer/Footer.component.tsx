import { FooterLink } from './styled';
import { FooterContainer } from './styled';
import { GithubLinks } from './styled';
import { CourseLinkContainer } from './styled';
import { FooterWrapper } from './styled';
import logo from '../../assets/rs_school_logo.png';
import { Logo } from './styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <GithubLinks>
          <FooterLink
            target="_blank"
            href="https://github.com/ElizavetaRazumenko"
            title="ElizavetaRazumenko"
          >
            Github
          </FooterLink>
          <FooterLink
            target="_blank"
            href="https://github.com/vpyadus"
            title="vpyadus"
          >
            Github
          </FooterLink>
          <FooterLink
            target="_blank"
            href="https://github.com/AlexeiIsProgrammer"
            title="AlexeiIsProgrammer"
          >
            Github
          </FooterLink>
        </GithubLinks>
        <CourseLinkContainer>
          <FooterLink>2023</FooterLink>
          <FooterLink
            target="_blank"
            href="https://rs.school/react/"
            title="Logo"
          >
            <Logo src={logo} />
          </FooterLink>
        </CourseLinkContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
