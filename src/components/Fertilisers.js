import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Divider,
  Typography,
  Button,
  Link,
} from '@material-ui/core';
import FertiliserCard from './FertiliserCard';

const Fertilisers = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '1rem',
    },
    h2: {
      marginBottom: '6px',
    },
  }));
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography className={classes.h2} variant="h2">
        Fertilisers
      </Typography>
      <Divider />
      <Box>
        <FertiliserCard />
      </Box>
    </Container>
  );
};

Fertilisers.propTypes = {
  // loginOnClick: PropTypes.func,
};

export default Fertilisers;
