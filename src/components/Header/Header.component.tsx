import {
  AppBar,
  Container,
  Link,
  Toolbar,
  useScrollTrigger,
  ButtonGroup,
  Box,
} from '@mui/material';
import { ReactElement, cloneElement, useState } from 'react';
import { ToolbarContainer } from './styled/ToolbarContainer';
import { HeaderLinksContainer } from './styled/HeaderLinksContainer';
import { ButtonLanguage } from './styled/Button';

const SlideScroll = ({ children }: { children: ReactElement }) => {
  const trigger = useScrollTrigger();

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'secondary' : 'primary',
    sx: {
      borderBottom: 'solid white 2px',
      padding: trigger ? '6px' : '16px',
      transition: '0.6s',
    },
  });
};

const Header = () => {
  const [isAuthenticated] = useState<boolean>(false);

  return (
    <>
      <SlideScroll>
        <AppBar>
          <Container>
            <ToolbarContainer>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/" color="inherit">
                  GraphiQL
                </Link>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  sx={{ marginLeft: '25px' }}
                >
                  <ButtonLanguage>EN</ButtonLanguage>
                  <ButtonLanguage>FR</ButtonLanguage>
                </ButtonGroup>
              </Box>

              <HeaderLinksContainer>
                {!isAuthenticated && (
                  <>
                    <Link href="/auth?action=login" color="inherit">
                      Login
                    </Link>
                    <Link href="/auth?action=register" color="inherit">
                      Register
                    </Link>
                  </>
                )}
                {isAuthenticated && (
                  <>
                    <Link href="#" color="inherit">
                      Logout
                    </Link>
                  </>
                )}
              </HeaderLinksContainer>
            </ToolbarContainer>
          </Container>
        </AppBar>
      </SlideScroll>
      <Toolbar />
    </>
  );
};

export default Header;
