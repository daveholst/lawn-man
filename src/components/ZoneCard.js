import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const ZoneCard = () => {
  const useStyles = makeStyles(() => ({
    root: {},
  }));
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <Typography>ZONE TITLE</Typography>
    </Paper>
  );
};

ZoneCard.propTypes = {
  // loginOnClick: PropTypes.func,
};

export default ZoneCard;
