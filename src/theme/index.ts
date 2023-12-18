import { createTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';
import bgPicture from '../assets/bg_2_1.png';

const { breakpoints } = createTheme();

export let appTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000',
      light: '#878080',
    },
    secondary: {
      main: '#191c3f',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Michroma',
    subtitle1: {
      [breakpoints.down('sm')]: {
        fontSize: '14px',
      },
      [breakpoints.up('sm')]: {
        fontSize: '16px',
      },
    },
    h1: {
      [breakpoints.down('sm')]: {
        fontSize: '14px',
      },
      [breakpoints.up('sm')]: {
        fontSize: '26px',
      },
    },
  },
});

appTheme = createTheme(appTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          '&::-webkit-scrollbar': {
            width: '12px',
            background: appTheme.palette.primary.main,
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-track': {
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: appTheme.palette.primary.dark,
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: appTheme.palette.primary.contrastText,
          },
        },
        body: {
          backgroundImage: `url(${bgPicture})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          color: appTheme.palette.primary.main,
        },
        '#root': { height: '100vh', display: 'flex', flexDirection: 'column' },
      },
    },
  },
});
