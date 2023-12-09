import { Box, Stack } from '@mui/material';
import { FooterLink } from './styled/FooterLink';
import { FooterContainer } from './styled/FooterContainer';
import { Wrapper } from '../Wrapper';
import logo from '../../assets/rs_school_logo.png';
import { GithubLinks } from './styled/GithubLinks';
import { CourseLink } from './styled/CourseLink';

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={8}
        >
          <GithubLinks>
            <FooterLink
              href="https://github.com/ElizavetaRazumenko"
              title="ElizavetaRazumenko"
            >
              Github
            </FooterLink>
            <FooterLink href="https://github.com/vpyadus" title="vpyadus">
              Github
            </FooterLink>
            <FooterLink
              href="https://github.com/AlexeiIsProgrammer"
              title="AlexeiIsProgrammer"
            >
              Github
            </FooterLink>
          </GithubLinks>
          <CourseLink>
            <FooterLink>2023</FooterLink>
            <FooterLink href="https://rs.school/react/" title="Logo">
              <Box component="img" alt="Logo" src={logo} />
            </FooterLink>
          </CourseLink>
        </Stack>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
