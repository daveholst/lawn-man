import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import SignUpForm from './SignUpForm';

const EditZoneDialog = ({ open, handleClose }) => (
  // props received from App.js
  <Dialog open={open} onClose={handleClose}>
    <SignUpForm handleClose={handleClose} />
  </Dialog>
);

EditZoneDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default EditZoneDialog;
