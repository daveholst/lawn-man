import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useMutation } from 'react-query';
import Auth from '../utils/authUtils';
// import { LOGIN_USER } from '../utils/apiMutations';
import { login } from '../utils/apiRequest';

const LoginForm = ({ handleClose }) => {
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
    email: '',
    password: '',
  });

  const [showEmailAlert, setEmailShowAlert] = useState(false);
  const [showPasswordAlert, setPasswordShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  // const loginUser = useMutation((loginUserData) => login(loginUserData));
  // mutation for login user
  // const [loginUser, { _loginUserError, _loginUserData }] =
  // useMutation(LOGIN_USER);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setEmailShowAlert(false);
    setPasswordShowAlert(false);
    // TODO: add some form validation? check material-UI docs.
    e.preventDefault();
    // add user to db through api
    try {
      // const { data } = await loginUser({
      //   variables: { ...userFormData },
      // });
      const { data } = await axios({
        method: 'post',
        url:
          process.env.NODE_ENV === 'production'
            ? 'https://lawn-man-server-rest.holst.club/api/user/login'
            : 'http://localhost:3001/api/user/login',
        data: { ...userFormData },
        headers: { Authorization: Auth.getToken() },
      });
      // const data = await loginUser.mutateAsync({ ...userFormData });
      // console.log(data);
      if (!data) {
        throw new Error('something went wrong!');
      }

      // login and save token
      Auth.login(data.token);
      handleClose();
      // redirect to dashboard
    } catch (err) {
      console.dir(err);
      if (err.response.data.message === 'No user with that email!') {
        setAlertText(err.response.data.message);
        setEmailShowAlert(true);
      } else if (err.response.data.message === 'Wrong Password') {
        setAlertText(err.response.data.message);
        setPasswordShowAlert(true);
      } else {
        console.dir(err);
      }

      // setAlertText(err.message);
    }
  };

  LoginForm.propTypes = {
    handleClose: PropTypes.func,
  };
  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        type="email"
        required
        onChange={handleInputChange}
        error={showEmailAlert}
        helperText={showEmailAlert ? alertText : null}
      />
      <TextField
        label="Password"
        name="password"
        variant="outlined"
        type="password"
        required
        error={showPasswordAlert}
        helperText={showPasswordAlert ? alertText : null}
        onChange={handleInputChange}
      />
      {/* { showAlert && } */}
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

export default LoginForm;
