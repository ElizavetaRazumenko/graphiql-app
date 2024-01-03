import {
  AppBar,
  Container,
  Link,
  Toolbar,
  useScrollTrigger,
  ToggleButtonGroup,
} from '@mui/material';
import { ReactElement, cloneElement, useContext } from 'react';
import {
  ButtonLanguage,
  HeaderLinksContainer,
  ToolbarContainer,
} from './styled';
import { localizationContext } from '../../context/localizationContext';
import { AvailableLanguages } from '../../context/types';
import { useNavigate, useLocation } from 'react-router';
import { logout } from '../../firebase';

type HeaderProps = {
  isAuthenticated: boolean;
  loading: boolean;
};

const SlideScroll = ({ children }: { children: ReactElement }) => {
  const trigger = useScrollTrigger();

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'secondary' : 'primary',
    sx: {
      borderBottom: 'solid white 2px',
      padding: trigger ? '6px' : '16px',
      transition: '0.6s',
      '& .MuiToggleButton-root': {
        color: trigger ? 'white' : '',
        border: trigger ? '1px solid white' : '',
      },
      '& .MuiToggleButton-root.Mui-selected': {
        backgroundColor: trigger ? 'rgba(255, 255, 255, 0.2)' : '',
      },
      '& .MuiToggleButton-root:hover': {
        color: trigger ? 'white' : '',
        backgroundColor: trigger ? 'rgba(255, 255, 255, 0.4)' : '',
      },
    },
  });
};

const Header = ({ isAuthenticated, loading }: HeaderProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMainPage = location.pathname === '/main';

  const {
    currentLanguage,
    setCurrentLanguage,
    currentLocalization: {
      header: { login, registration },
    },
  } = useContext(localizationContext);

  const onClickLogo = (): void => {
    navigate('/');
  };

  const onClickLogin = (): void => {
    navigate('/auth?action=login');
  };

  const onClickRegister = (): void => {
    navigate('/auth?action=register');
  };

  const onClickMain = (): void => {
    navigate('/main');
  };

  const onClickLogout = (): void => {
    logout();
  };

  const handleChangeLanguage = (
    _: React.MouseEvent<HTMLElement>,
    newLanguage: AvailableLanguages | null,
  ): void => {
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
    }
  };

  return (
    <>
      <SlideScroll>
        <AppBar>
          <Container>
            <ToolbarContainer>
              <HeaderLinksContainer>
                <Link href="#" color="inherit" onClick={onClickLogo}>
                  GraphiQL
                </Link>

                <ToggleButtonGroup
                  value={currentLanguage}
                  exclusive
                  onChange={handleChangeLanguage}
                >
                  <ButtonLanguage value="english">EN</ButtonLanguage>
                  <ButtonLanguage value="french">FR</ButtonLanguage>
                </ToggleButtonGroup>
              </HeaderLinksContainer>

              <HeaderLinksContainer alignItems={'flex-end'}>
                {!isAuthenticated && !loading && (
                  <>
                    <Link href="#" color="inherit" onClick={onClickLogin}>
                      {login}
                    </Link>
                    <Link href="#" color="inherit" onClick={onClickRegister}>
                      {registration}
                    </Link>
                  </>
                )}
                {isAuthenticated && !loading && (
                  <>
                    <Link
                      href="#"
                      color="inherit"
                      onClick={onClickMain}
                      hidden={isMainPage}
                    >
                      Main Page
                    </Link>
                    <Link href="#" color="inherit" onClick={onClickLogout}>
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
