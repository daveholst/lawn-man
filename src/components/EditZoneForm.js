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
import { useMutation } from '@apollo/client';
import { EDIT_ZONE } from '../utils/apiMutations';

const EditZoneForm = ({
  zoneId,
  area,
  stationNumber,
  stationName,
  type,
  propertyName,
}) => {
  const [updateZone, { _updateZoneError, _updateZoneData }] =
    useMutation(EDIT_ZONE);

  const [zoneFormData, setZoneFormData] = useState({
    stationNumber,
    stationName,
    area,
    type,
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setZoneFormData({ ...zoneFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // TODO: add some form validation? check material-UI docs.
    e.preventDefault();
    console.log(zoneFormData);
    console.log({
      zoneId,
      editZonesInput: zoneFormData,
    });
    // add user to db through api
    try {
      const { data } = await updateZone({
        variables: {
          propertyName,
          zoneId,
          editZonesInput: zoneFormData,
        },
      });
      window.location.reload();
      if (!data) {
        throw new Error('something went wrong!');
      }

      // const { token, user } = data.addUser;
      // // TODO apply login
      // console.log(token, user);
      // // login and save token
      // Auth.login(token);
      // // redirect to dashboard
    } catch (err) {
      console.error(err);
      // TODO alert front end on failure
      // setShowAlert(true);
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '1rem',
      padding: '0',
    },
    field: {
      marginTop: '.7rem',
      width: '100%',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginLeft: '15px',
      marginTop: '-6px',
    },
    button: {
      margin: '.5rem 0 0 0',
      height: '60px',
      fontSize: '1.5rem',
      fontWeight: '400',
    },
  }));
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <form className={classes.editForm}>
        <TextField
          className={classes.field}
          name="StationNumber"
          defaultValue={zoneFormData.stationNumber}
          disabled
          label="Station Number"
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="stationName"
          label="Station Name"
          defaultValue={zoneFormData.stationName}
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <FormControl className={classes.field}>
          <InputLabel
            className={classes.label}
            htmlFor="outlined-age-native-simple"
          >
            Garden Type
          </InputLabel>
          <Select
            fullWidth
            variant="outlined"
            native
            label="Garden Type"
            defaultValue={zoneFormData.type}
            onChange={handleInputChange}
            inputProps={{
              name: 'type',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value="Master Valve">Master Valve</option>
            <option value="Lawn">Lawn</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruit Trees">Fruit Trees</option>
            <option value="Mixed">Mixed</option>
          </Select>
        </FormControl>
        <TextField
          className={classes.field}
          name="area"
          label="Station Area m2"
          defaultValue={zoneFormData.area}
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <Button
          className={classes.button}
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          color="secondary"
          disableElevation
          size="large"
          fullWidth
        >
          Update Zone
        </Button>

        {/* <FormHelperText id="my-helper-text">
      We'll never share your email.
    </FormHelperText> */}
      </form>
    </Container>
  );
};

EditZoneForm.propTypes = {
  zoneId: PropTypes.string,
  area: PropTypes.string,
  stationNumber: PropTypes.string,
  stationName: PropTypes.string,
  type: PropTypes.string,
  propertyName: PropTypes.string,
};

export default EditZoneForm;
