import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const CreateGarden = () => {
  const classes = useStyles();
  return <Typography variant="h2">Create a Garden </Typography>;
};

export default CreateGarden;
