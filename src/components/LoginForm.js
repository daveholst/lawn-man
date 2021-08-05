import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Auth from '../utils/authUtils';
import { LOGIN_USER } from '../utils/apiMutations';

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
  // form state managment
  const [userFormData, setUserFormData] = useState({
    email: '',
    password: '',
  });
  // use History hook
  const history = useHistory();

  // mutation for create user
  const [loginUser, { _loginUserError, _loginUserData }] =
    useMutation(LOGIN_USER);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // TODO: add some form validation? check material-UI docs.
    e.preventDefault();
    console.log(userFormData);
    handleClose();
    // add user to db through api
    try {
      const { data } = await loginUser({
        variables: { ...userFormData },
      });
      if (!data) {
        throw new Error('something went wrong!');
      }
      console.log(data);
      const { token, user } = data.login;
      // TODO apply login
      console.log(token, user);
      // login and save token
      Auth.login(token);
      // redirect to dashboard
      // history.push('/dashboard/');
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
          Login
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
