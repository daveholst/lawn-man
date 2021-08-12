import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, ButtonBase, Button } from '@material-ui/core';

const ZoneCard = ({ stationNumber, stationName, type, area }) => {
  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      // flexWrap: 'wrap',
    },
    paper: {
      // padding: theme.spacing(2),
      margin: 'auto',
      padding: '10px',
      marginTop: '15px',
      width: 350,
    },
    image: {
      width: 128,
      height: 128,
    },
  }));
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={1}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <Typography variant="h4">Station </Typography>
            <Typography variant="h2">{stationNumber}</Typography>
          </ButtonBase>
          {/* <Button variant="contained">Default</Button>
          <Button variant="contained">Default</Button> */}
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                <b>{stationName}</b>
              </Typography>
              <Typography variant="body2" gutterBottom>
                Zone type: {type}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Area: {area} m2
              </Typography>
            </Grid>
            <Grid item container justifyContent="space-between" direction="row">
              <Button size="small" variant="contained" color="primary">
                FERTIGATE
              </Button>
              <Button size="small" variant="contained">
                EDIT
              </Button>
              {/* <Button variant="contained" color="secondary">
                Secondary
              </Button> */}
              {/* <Button variant="contained" disabled>
                Disabled
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
              >
                Link
              </Button> */}

              {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>
                Remove
              </Typography>
              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                Remove
              </Typography> */}
            </Grid>
          </Grid>
          {/* <Grid item>
            <Typography variant="subtitle1">$19.00</Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </Paper>
  );
};

ZoneCard.propTypes = {
  stationNumber: PropTypes.string,
  stationName: PropTypes.string,
  type: PropTypes.string,
  area: PropTypes.string,
};

export default ZoneCard;
