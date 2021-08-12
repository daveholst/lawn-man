import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Grid,
  ButtonBase,
  Button,
  Link,
  Select,
  FormControl,
  TextField,
  InputLabel,
  Container,
} from '@material-ui/core';
import EditZoneForm from './EditZoneForm';

const ZoneCard = ({ stationNumber, stationName, type, area }) => {
  const [editFormVisible, setEditFormVisible] = useState(false);

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: 'auto',
      padding: '10px',
      marginTop: '15px',
      width: 350,
    },
    image: {
      width: 128,
      height: 128,
    },
    editForm: {
      marginTop: '1rem',
    },
    editFormHidden: {
      display: 'none',
    },
    editFormVisible: {
      display: 'none',
    },
    field: {
      marginBottom: '.7rem',
    },
  }));
  const classes = useStyles();

  const editFormClickHandler = () => {
    if (editFormVisible) {
      setEditFormVisible(false);
    } else {
      setEditFormVisible(true);
    }
    console.log(editFormVisible);
  };

  return (
    <Paper className={classes.paper} elevation={1}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <Typography variant="h4">Station </Typography>
            <Typography variant="h2">{stationNumber}</Typography>
          </ButtonBase>
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
              <Button
                size="small"
                variant="contained"
                onClick={editFormClickHandler}
              >
                EDIT
              </Button>
            </Grid>
          </Grid>
          {/* <Grid item>
            <Typography variant="subtitle1">$19.00</Typography>
          </Grid> */}
        </Grid>
      </Grid>
      {editFormVisible ? <EditZoneForm /> : null}
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
