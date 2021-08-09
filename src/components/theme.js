import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3C887E',
    },
    secondary: {
      main: '#91785D',
    },
    background: {
      default: 'rgba(187,225,195,0.3)',
    },
    divider: '8b5d33',
  },
  typography: {
    fontFamily: 'Nunito',
    // fontSize: 32,
    h1: {
      fontFamily: 'Open Sans',
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: 'Open Sans',
      fontWeight: 700,
      fontSize: '2rem',
    },
  },
});

export default theme;
