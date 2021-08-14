import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper, Typography } from '@material-ui/core';

const RecipeCard = ({
  propertyName,
  stationName,
  stationArea,
  fert1Obj,
  fert2Obj,
  fert3Obj,
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '.5rem',
    },
    title: {
      fontSize: '1.7rem',
      marginBottom: '.8rem',
    },
    subHeading: {
      fontSize: '1.3rem',
      fontWeight: '200',
    },
    fertHeading: {
      fontSize: '1.1rem',
      fontWeight: '400',
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
        <b>Property:</b> {propertyName}
      </Typography>
      <Typography className={classes.subHeading} variant="h4">
        <b>Station:</b> {stationName}
      </Typography>
      <Typography className={classes.subHeading} variant="h4">
        <b>Area:</b> {stationArea} m2
      </Typography>
      <Divider />

      {fert1Obj && (
        <>
          <br />
          <Typography className={classes.fertHeading}>Fertiliser 1</Typography>
          <Typography>
            <b>Product:</b> {fert1Obj.productBrand} - {fert1Obj.productName}
          </Typography>
          <Typography>
            <b>Amount to Add:</b> {stationArea * fert1Obj.applicationRate} mL
          </Typography>
          <br />
        </>
      )}
      {fert2Obj && (
        <>
          <Typography className={classes.fertHeading}>Fertiliser 2</Typography>
          <Typography>
            <b>Product:</b> {fert2Obj.productBrand} - {fert2Obj.productName}
          </Typography>
          <Typography>
            <b>Amount to Add:</b> {stationArea * fert2Obj.applicationRate} mL
          </Typography>
        </>
      )}
      {fert3Obj && (
        <>
          <br />
          <Typography className={classes.fertHeading}>Fertiliser 3</Typography>
          <Typography>
            <b>Product:</b> {fert3Obj.productBrand} - {fert3Obj.productName}
          </Typography>
          <Typography>
            <b>Amount to Add:</b> {stationArea * fert3Obj.applicationRate} mL
          </Typography>
        </>
      )}
    </Paper>
  );
};

RecipeCard.propTypes = {
  propertyName: PropTypes.string,
  stationName: PropTypes.string,
  stationArea: PropTypes.string,
  fert1Obj: PropTypes.object,
  fert2Obj: PropTypes.object,
  fert3Obj: PropTypes.object,
};

export default RecipeCard;
