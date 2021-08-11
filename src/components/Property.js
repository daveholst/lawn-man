import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';

const Property = ({ propertyName, address, juiceBoxId, climate, zones }) => {
  const useStyles = makeStyles(() => ({
    root: {},
    propertyInfo: {
      display: 'flex',
    },
  }));
  const classes = useStyles();
  console.log(propertyName);
  return (
    <Container>
      <h3>{propertyName}</h3>
      <Box className={classes.propertyInfo}>
        <h5>{address}</h5>
        <h5>{juiceBoxId}</h5>
        <h5>{climate}</h5>
      </Box>
      <Box display="flex">ZONES IN ERE</Box>
    </Container>
  );
};

Property.propTypes = {
  propertyName: PropTypes.string,
  address: PropTypes.string,
  juiceBoxId: PropTypes.string,
  climate: PropTypes.string,
  zones: PropTypes.array,
};

export default Property;
