import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useMutation } from 'react-query';
import Auth from '../utils/authUtils';
import { signup } from '../utils/apiRequest';

const SignUpForm = ({ handleClose }) => {
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
  // form state managment
  const [userFormData, setUserFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const createUser = useMutation((newUserData) => signup(newUserData), {
    onSuccess: (data) => {
      console.log(data);
      // login and save token
      Auth.login(data.token);
      // redirect to dashboard
      handleClose();
    },
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // TODO: add some form validation? check material-UI docs.
    e.preventDefault();
    // add user to db through api
    try {
      await createUser.mutate(userFormData);
    } catch (err) {
      console.error(err);
      // TODO alert front end on failure
      // setShowAlert(true);
    }
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
        variant="outlined"
        required
        onChange={handleInputChange}
      />
      <TextField
        label="Last Name"
        name="lastName"
        variant="outlined"
        required
        onChange={handleInputChange}
      />
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        type="email"
        required
        onChange={handleInputChange}
      />
      <TextField
        label="Password"
        name="password"
        variant="outlined"
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
