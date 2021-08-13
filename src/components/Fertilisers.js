import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Divider,
  Typography,
  Button,
  Link,
} from '@material-ui/core';
import { GET_FERTILISERS } from '../utils/apiQueries';
import FertiliserCard from './FertiliserCard';

const Fertilisers = () => {
  const {
    loading,
    error: fertErrorRes,
    data: fertDataRes,
  } = useQuery(GET_FERTILISERS);
  const fertData = fertDataRes?.fertilisers;
  console.log(fertData);
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '1rem',
    },
    h2: {
      marginBottom: '6px',
    },
    titleContainer: {
      display: 'flex',
    },
    button: {
      height: '2rem',
    },
    fertContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }));
  const classes = useStyles();
  if (loading) {
    return (
      <Container maxWidth="md" className={classes.root}>
        <Typography variant="h2">Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <Box justifyContent="space-between" className={classes.titleContainer}>
        <Typography className={classes.h2} variant="h2">
          Fertilisers
        </Typography>
        <Link underline="none" component={RouterLink} to="/create-fert">
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            ADD MORE
          </Button>
        </Link>
      </Box>
      <Divider />
      <Box className={classes.fertContainer}>
        {fertData.map((fert) => (
          <FertiliserCard
            key={fert._id}
            _id={fert._id}
            productBrand={fert.productBrand}
            productName={fert.productName}
            type={fert.type}
            description={fert.description}
            applicationRate={fert.applicationRate}
            manufacturerLink={fert.manufacturerLink}
            bunningsLink={fert.bunningsLink}
            imageLink={fert.imageLink}
          />
        ))}
      </Box>
    </Container>
  );
};

Fertilisers.propTypes = {
  // loginOnClick: PropTypes.func,
};

export default Fertilisers;
