// TODO: This will be a modal style dialouge that takes info to signup a user.

import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import SignUpForm from './SignUpForm';

const ModalDialog = ({ open, handleClose }) => (
  // props received from App.js
  <Dialog open={open} onClose={handleClose}>
    {/* form to be created */}
    <SignUpForm handleClose={handleClose} />
  </Dialog>
);

ModalDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default ModalDialog;
