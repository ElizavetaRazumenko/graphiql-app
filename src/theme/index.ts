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
        body: {
          backgroundImage: `url(${bgPicture})`,
          backgroundSize: 'cover',
          color: appTheme.palette.primary.main,
        },
        '#root': { height: '100vh' },
      },
    },
  },
});
