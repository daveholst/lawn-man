import { useState } from 'react';
import Button from '@material-ui/core/Button';
import SignUpDialog from './SignUpDialog';
import LoginDialog from './LoginDialog';
import './LandingPage.css';

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
    <div className="Landing-Page">
      <Button variant="contained" color="primary" onClick={handleSignUpOpen}>
        Signup
      </Button>
      <Button variant="contained" color="primary" onClick={handleLoginOpen}>
        Login
      </Button>
      {/* // display the modal and pass props */}
      <SignUpDialog open={signUpOpen} handleClose={handleSignUpClose} />
      <LoginDialog open={loginOpen} handleClose={handleLoginClose} />
    </div>
  );
};

export default App;
