import { useState } from 'react';
import {
  Container,
  Button,
  CssBaseline,
  Typography,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SignUpDialog from './SignUpDialog';
import LoginDialog from './LoginDialog';
// import './LandingPage.css';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${`${process.env.PUBLIC_URL}./assets/grass-bg.jpg`})`,
    backgroundRepeat: 'no-repate',
    backgroundSize: 'cover',
  },

  welcome: {
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 48px)',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeBox: {
    background: 'rgba(255,255,255,.7)',
    padding: '1rem',
    borderRadius: '6px',
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
  buttons: {
    paddingRight: '1rem',
  },
}));

const App = () => {
  const classes = useStyles();
  // declare a new state variable for modal open
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  // function to handle signup modal open
  const handleSignUpOpen = () => {
    setSignUpOpen(true);
  };
  const handleSignUpClose = () => {
    setSignUpOpen(false);
  };
  // function to handle login modal open
  const handleLoginOpen = () => {
    setLoginOpen(true);
  };
  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <NavBar loginOnClick={handleLoginOpen} />
        <div className={classes.welcome}>
          <Box mx="auto" className={classes.welcomeBox}>
            <Typography variant="h1">
              Welcome to <span>Lawn Man</span>
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              culpa consequatur? Dolores iusto natus quaerat impedit excepturi
              eligendi tempore quibusdam, porro corrupti voluptates dignissimos
              ducimus nobis sapiente maiores perferendis saepe.
            </Typography>
            <br />
            <div className={classes.buttonsWrapper}>
              <Box mr={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSignUpOpen}
                >
                  Signup
                </Button>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLoginOpen}
              >
                Login
              </Button>
            </div>
          </Box>
        </div>
        {/* // display the modal and pass props */}
      </div>
      <SignUpDialog open={signUpOpen} handleClose={handleSignUpClose} />
      <LoginDialog open={loginOpen} handleClose={handleLoginClose} />
    </>
  );
};

export default App;
