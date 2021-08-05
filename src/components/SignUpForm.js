import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Auth from '../utils/authUtils';

// styling
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
  const [userFormData, setUserFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userFormData);
    handleClose();
  };

  SignUpForm.propTypes = {
    handleClose: PropTypes.func,
  };
  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        name="firstName"
        variant="filled"
        required
        onChange={handleInputChange}
      />
      <TextField
        label="Last Name"
        name="lastName"
        variant="filled"
        required
        onChange={handleInputChange}
      />
      <TextField
        label="Email"
        name="email"
        variant="filled"
        type="email"
        required
        onChange={handleInputChange}
      />
      <TextField
        label="Password"
        name="password"
        variant="filled"
        type="password"
        required
        onChange={handleInputChange}
      />
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
