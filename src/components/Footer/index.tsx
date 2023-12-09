import { Box, Stack } from '@mui/material';
import { Link } from '../Link';
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
            <Link
              href="https://github.com/ElizavetaRazumenko"
              title="ElizavetaRazumenko"
            >
              Github
            </Link>
            <Link href="https://github.com/vpyadus" title="vpyadus">
              Github
            </Link>
            <Link
              href="https://github.com/AlexeiIsProgrammer"
              title="AlexeiIsProgrammer"
            >
              Github
            </Link>
          </GithubLinks>
          <CourseLink>
            <Link>2023</Link>
            <Link href="https://rs.school/react/" title="Logo">
              <Box component="img" alt="Logo" src={logo} />
            </Link>
          </CourseLink>
        </Stack>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
