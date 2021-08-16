import { useState } from 'react';
import {
  Container,
  Button,
  CssBaseline,
  Typography,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SignUpDialog from './SignUpDialog';
import LoginDialog from './LoginDialog';
// import './LandingPage.css';
import NavBar from './NavBar';

const LandingPage = ({ handleLoginOpen, handleSignUpOpen }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      marginTop: '-48px',
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
    },
    buttons: {
      paddingRight: '1rem',
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.welcome}>
          <Box mx="auto" className={classes.welcomeBox}>
            <Typography variant="h1">
              Welcome to{' '}
              <span>
                <b>Lawn Manager</b>
              </span>
            </Typography>
            <br />
            <Typography variant="subtitle1">
              Lawn Manager is a cloud based automatic garden fertilising system
              that integrates with your preexisting irrigation stations to
              deliver fertiliser through your sprinklers. We call it
              fertigation. It is suitable for all types of garden beds and
              provides an easy no fuss solution to maintaining healthy plants
              and sub-root systems.
            </Typography>
            <br />
            <div className={classes.buttonsWrapper}>
              <Box mr={2}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={handleSignUpOpen}
                >
                  Signup
                </Button>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLoginOpen}
              >
                Login
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

LandingPage.propTypes = {
  handleLoginOpen: PropTypes.func,
  handleSignUpOpen: PropTypes.func,
};
export default LandingPage;
