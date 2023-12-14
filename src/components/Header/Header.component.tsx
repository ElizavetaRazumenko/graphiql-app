import {
  AppBar,
  Container,
  Link,
  Toolbar,
  useScrollTrigger,
  Stack,
} from '@mui/material';
import { ReactElement, cloneElement, useState, useContext } from 'react';
import { ToolbarContainer } from './styled/ToolbarContainer';
import { HeaderLinksContainer } from './styled/HeaderLinksContainer';
import { ButtonLanguage } from './styled/Button';
import { localizationContext } from '../../context/localizationContext';

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

  const {
    currentLanguage,
    setCurrentLanguage,
    currentLocalization: {
      header: { login, registration },
    },
  } = useContext(localizationContext);

  const switchToEnglish = () => {
    setCurrentLanguage('english');
  };

  const switchToFrench = () => {
    setCurrentLanguage('french');
  };

  return (
    <>
      <SlideScroll>
        <AppBar>
          <Container>
            <ToolbarContainer>
              <Stack direction="row" spacing={3}>
                <Link href="/" color="inherit">
                  GraphiQL
                </Link>

                <Stack direction="row" spacing={1}>
                  <ButtonLanguage
                    value="en"
                    selected={currentLanguage === 'english'}
                    onChange={switchToEnglish}
                  >
                    EN
                  </ButtonLanguage>
                  <ButtonLanguage
                    value="fr"
                    selected={currentLanguage === 'french'}
                    onChange={switchToFrench}
                  >
                    FR
                  </ButtonLanguage>
                </Stack>
              </Stack>

              <HeaderLinksContainer>
                {!isAuthenticated && (
                  <>
                    <Link href="/auth?action=login" color="inherit">
                      {login}
                    </Link>
                    <Link href="/auth?action=register" color="inherit">
                      {registration}
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
