import { Box, Stack } from '@mui/material';
import { Link } from '../Link';
import { FooterContainer } from '../FooterContainer';
import { Wrapper } from '../Wrapper';
import logo from '../../assets/rs_school_logo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={8}
          flexWrap="wrap"
        >
          <Stack
            direction="row"
            gap={8}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
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
          </Stack>
          <Stack
            direction="row"
            gap={5}
            alignItems="center"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Link>2023</Link>
            <Link href="https://rs.school/react/" title="Logo">
              <Box component="img" alt="Logo" src={logo} />
            </Link>
          </Stack>
        </Stack>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
