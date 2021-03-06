import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import ZoneCard from './ZoneCard';

const Property = ({ propertyName, address, juiceBoxId, climate, zones }) => {
  const useStyles = makeStyles(() => ({
    root: {},
    property: {
      padding: '0px',
      margin: '15px 0 0 0',
    },
    h4: {
      marginLeft: '10px',
      marginTop: '10px',
      fontSize: '1.1rem',
    },
    zoneContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }));
  const classes = useStyles();
  // console.log(propertyName);
  return (
    <Container className={classes.property}>
      <Box className={classes.propertyInfo}>
        <Typography variant="h3">{propertyName}</Typography>
        <Typography variant="h4" className={classes.h4}>
          <b>address:</b> {address} || <b>juice box:</b> {juiceBoxId} ||{' '}
          <b>climate:</b> {climate}
        </Typography>
      </Box>
      <Box className={classes.zoneContainer}>
        {zones.map((zone) => (
          <ZoneCard
            propertyName={propertyName}
            stationNumber={zone.stationNumber}
            stationName={zone.stationName}
            type={zone.type}
            area={zone.area}
            key={zone._id}
            zoneId={zone._id}
          />
        ))}
      </Box>
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
