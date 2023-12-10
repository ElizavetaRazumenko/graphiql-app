import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
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
              <Typography>GraphiQL</Typography>
              <HeaderLinksContainer>
                {!isAuthenticated && (
                  <>
                    <Link href="#" color="inherit">
                      Login
                    </Link>
                    <Link href="#" color="inherit">
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
