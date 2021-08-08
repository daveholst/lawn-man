import { useState } from 'react';
import { Container, Button } from '@material-ui/core';
import SignUpDialog from './SignUpDialog';
import LoginDialog from './LoginDialog';
import './LandingPage.css';
import NavBar from './NavBar';

const App = () => {
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
      <NavBar loginOnClick={handleLoginOpen} />
      {/* <div className="Landing-Page"> */}
      <Container maxWidth="sm">
        <Button variant="contained" color="primary" onClick={handleSignUpOpen}>
          Signup
        </Button>
        <Button variant="contained" color="primary" onClick={handleLoginOpen}>
          Login
        </Button>
        {/* // display the modal and pass props */}
      </Container>
      {/* </div> */}
      <SignUpDialog open={signUpOpen} handleClose={handleSignUpClose} />
      <LoginDialog open={loginOpen} handleClose={handleLoginClose} />
    </>
  );
};

export default App;
