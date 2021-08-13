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
  Divider,
} from '@material-ui/core';

const FertiliserCard = ({
  _id,
  productBrand,
  productName,
  type,
  description,
  applicationRate,
  manufacturerLink,
  bunningsLink,
  imageLink,
}) => {
  const [editFormVisible, setEditFormVisible] = useState(false);

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      margin: 'auto',
      padding: '10px',
      marginTop: '15px',
      maxWidth: '400px',
    },
    image: {
      margin: 'auto',
      width: 150,
      height: 150,
    },
    imageContainer: {
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
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
    button: {
      // marginBottom: '15px',
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
    <Paper className={classes.root} elevation={1}>
      <Grid container direction="row" spacing={2}>
        <Grid item className={classes.imgContainer}>
          <ButtonBase className={classes.image}>
            <img
              className={classes.fertImage}
              src={`${process.env.PUBLIC_URL}./assets/fertiliser/${imageLink}`}
              alt=""
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                <b>
                  {productBrand} - {productName}
                </b>
              </Typography>

              <Typography variant="body2" gutterBottom>
                Type: {type}
              </Typography>

              <Typography variant="body2" color="textSecondary">
                Application Rate: {applicationRate}mL / m2
              </Typography>
            </Grid>
            <Grid item xs>
              <Divider />
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid item>
            <Typography variant="subtitle1">$19.00</Typography>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.buttonC}>
        <Grid
          item
          xs
          container
          justifyContent="space-evenly"
          direction="row"
          spacing={0}
        >
          <Link href={manufacturerLink}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              INFO
            </Button>
          </Link>
          <Link href={bunningsLink}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              BUY
            </Button>
          </Link>
          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            FERTIGATE
          </Button>
          <Button
            size="small"
            variant="contained"
            disabled
            className={classes.button}
            // onClick={editFormClickHandler}
          >
            EDIT
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

FertiliserCard.propTypes = {
  _id: PropTypes.string,
  productBrand: PropTypes.string,
  productName: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  applicationRate: PropTypes.string,
  manufacturerLink: PropTypes.string,
  bunningsLink: PropTypes.string,
  imageLink: PropTypes.string,
};

export default FertiliserCard;
