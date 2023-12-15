import {
  AppBar,
  Container,
  Link,
  Toolbar,
  useScrollTrigger,
  ToggleButtonGroup,
} from '@mui/material';
import { ReactElement, cloneElement, useState, useContext } from 'react';
import { ToolbarContainer } from './styled/ToolbarContainer';
import { HeaderLinksContainer } from './styled/HeaderLinksContainer';
import { ButtonLanguage } from './styled/ButtonLanguage';
import { localizationContext } from '../../context/localizationContext';
import { AvailableLanguages } from '../../context/types';
import { useNavigate } from 'react-router';

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

const Header = () => {
  const [isAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

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
                {!isAuthenticated && (
                  <>
                    <Link href="#" color="inherit" onClick={onClickLogin}>
                      {login}
                    </Link>
                    <Link href="#" color="inherit" onClick={onClickRegister}>
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
