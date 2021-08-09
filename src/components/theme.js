import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3C887E',
    },
    secondary: {
      main: '#475657',
    },
  },
  typography: {
    fontFamily: 'Nunito',
    // fontSize: 32,
    h1: {
      fontFamily: 'arial',
      fontWeight: 700,
      fontSize: '3rem',
    },
  },
});

export default theme;
