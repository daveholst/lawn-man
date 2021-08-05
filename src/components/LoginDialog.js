// TODO: This will be a modal style dialouge that takes info to signup a user.

import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import LoginForm from './LoginForm';

const ModalDialog = ({ open, handleClose }) => (
  // props received from App.js
  <Dialog open={open} onClose={handleClose}>
    <LoginForm handleClose={handleClose} />
  </Dialog>
);

ModalDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default ModalDialog;
