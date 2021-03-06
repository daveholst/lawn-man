// import PropTypes from 'prop-types';
// import { useQuery } from '@apollo/client';

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Divider,
  Typography,
  Button,
  Link,
} from '@material-ui/core';
import { getMe } from '../utils/apiRequest';
// import { GET_ME } from '../utils/apiQueries';
import Property from './Property';

const Dashboard = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '1rem',
    },
    h2: {
      marginBottom: '6px',
    },
    warningBox: {
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    setupPropertyButton: {
      margin: '.5rem auto',
      height: '60px',
      fontSize: '1.5rem',
      fontWeight: '400',
    },
  }));
  const classes = useStyles();
  // const { loading, error: userErrorRes, data: userDataRes } = useQuery(GET_ME);
  // const queryClient = useQueryClient;
  const { isLoading, isError, data, error } = useQuery('todos', getMe);

  const userData = data;
  // console.log(userData);
  if (isError) {
    return (
      <Container maxWidth="md" className={classes.root}>
        <h2>{error}</h2>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container maxWidth="md" className={classes.root}>
        <h2>LOADING...</h2>;
      </Container>
    );
  }
  if (userData.properties.length === 0) {
    return (
      <Container maxWidth="md" className={classes.root}>
        <Typography className={classes.h2} variant="h2">
          {userData.firstName}'s Dashboard
        </Typography>
        <Divider />
        <Box className={classes.warningBox}>
          <Typography variant="h3">No Property Data Found!</Typography>
          <Link underline="none" component={RouterLink} to="/create-property">
            <Button
              className={classes.setupPropertyButton}
              // onClick={handleSubmit}
              variant="contained"
              color="secondary"
              disableElevation
              size="large"
              fullWidth
            >
              SETUP PROPERTY
            </Button>
          </Link>
        </Box>
      </Container>
    );
  }
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography className={classes.h2} variant="h2">
        {userData.firstName}'s Dashboard
      </Typography>
      <Divider />
      {userData.properties.map((propertyData) => (
        <Property
          propertyName={propertyData.propertyName}
          address={propertyData.address}
          juiceBoxId={propertyData.juiceBoxId}
          climate={propertyData.climate}
          zones={propertyData.zones}
          key={propertyData._id}
          zoneId={propertyData._id}
        />
      ))}
    </Container>
  );
};

export default Dashboard;
