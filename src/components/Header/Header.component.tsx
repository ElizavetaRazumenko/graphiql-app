import {
  AppBar,
  Container,
  Link,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import { ReactElement, cloneElement, useState } from 'react';
import { ToolbarContainer } from './styled/ToolbarContainer';
import { HeaderLinksContainer } from './styled/HeaderLinksContainer';

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
              <Link href="/" color="inherit">
                GraphiQL
              </Link>
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
