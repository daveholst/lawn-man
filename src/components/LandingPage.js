import { useState } from 'react';
import Button from '@material-ui/core/Button';
import SignUpDialog from './SignUpDialog';
import './LandingPage.css';

const App = () => {
  // declare a new state variable for modal open
  const [signUpOpen, setSignUpOpen] = useState(false);

  // function to handle signup modal open
  const handleSignUpOpen = () => {
    setSignUpOpen(true);
  };

  // function to handle signup modal close
  const handleSignUpClose = () => {
    setSignUpOpen(false);
  };

  return (
    <div className="Landing-Page">
      <Button variant="contained" color="primary" onClick={handleSignUpOpen}>
        Signup
      </Button>
      {/* // display the modal and pa ss props */}
      <SignUpDialog open={signUpOpen} handleClose={handleSignUpClose} />
    </div>
  );
};

export default App;
