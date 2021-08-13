import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper, Typography } from '@material-ui/core';

const RecipeCard = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '.5rem',
    },
    title: {
      fontSize: '1.7rem',
      marginBottom: '.8rem',
    },
    subHeading: {
      fontSize: '1.4rem',
    },
  }));
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} variant="h2">
        Mix Tank Recipe
        <Divider />
      </Typography>
      <Typography className={classes.subHeading} variant="h4">
        <b>Property:</b>{' '}
      </Typography>
      <Typography className={classes.subHeading} variant="h4">
        <b>Station:</b>{' '}
      </Typography>
      <Typography className={classes.subHeading} variant="h4">
        <b>Area:</b>{' '}
      </Typography>
    </Paper>
  );
};

RecipeCard.propTypes = {
  // loginOnClick: PropTypes.func,
};

export default RecipeCard;
