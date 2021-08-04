import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const SignUpForm = ({ handleClose }) => {
  SignUpForm.propTypes = {
    handleClose: PropTypes.func,
  };
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <TextField label="First Name" variant="filled" required />
      <TextField label="Last Name" variant="filled" required />
      <TextField label="Email" variant="filled" type="email" required />
      <TextField label="Password" variant="filled" type="password" required />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
