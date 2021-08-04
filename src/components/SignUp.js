// TODO: This will be a modal style dialouge that takes info to signup a user.

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Form from './Form';

const ModalDialog = ({ open, handleClose }) => (
  // props received from App.js
  <Dialog open={open} onClose={handleClose}>
    {/* form to be created */}
    <Form handleClose={handleClose} />
  </Dialog>
);

export default ModalDialog;
