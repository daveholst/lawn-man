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

const FertiliserCard = () => {
  const [editFormVisible, setEditFormVisible] = useState(false);

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: 'auto',
      padding: '10px',
      marginTop: '15px',
      maxWidth: '400px',
    },
    image: {
      width: 150,
      height: 150,
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
    fertImage: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  const classes = useStyles();

  const editFormClickHandler = () => {
    if (editFormVisible) {
      setEditFormVisible(false);
    } else {
      setEditFormVisible(true);
    }
  };

  return (
    <Paper className={classes.paper} elevation={1}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            {/* <Typography variant="h4">Station </Typography>
            <Typography variant="h2">dsaffsdssdfsadffsad</Typography> */}
            <img
              className={classes.fertImage}
              src={`${process.env.PUBLIC_URL}./assets/fertiliser/power-feed.png`}
              alt=""
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                <b>dssadfsad</b>
              </Typography>
              <Typography variant="body2" gutterBottom>
                Garden Type:
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Area:
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
    </Paper>
  );
};

FertiliserCard.propTypes = {};

export default FertiliserCard;
