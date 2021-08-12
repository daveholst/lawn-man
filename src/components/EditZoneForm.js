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

const EditZoneForm = ({ zoneId, area, stationNumber, stationName, type }) => {
  const [zoneFormData, setZoneFormData] = useState({
    _id: zoneId,
    stationNumber,
    stationName,
    area,
    type,
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setZoneFormData({ ...zoneFormData, [name]: value });
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
          disabled="true"
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
            label="Climate Zone"
            defaultValue={zoneFormData.type}
            onChange={handleInputChange}
            inputProps={{
              name: 'climate',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value="Tropical">Master Valve</option>
            <option value="Tropical">Lawn</option>
            <option value="Mild Tropical">Vegetables</option>
            <option value="Semi-arid">Fruit Trees</option>
            <option value="Arid">Mixed</option>
          </Select>
        </FormControl>
        <TextField
          className={classes.field}
          name="area"
          label="Station Area"
          defaultValue={zoneFormData.area}
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <Button
          className={classes.button}
          type="submit"
          // onClick={handleSubmit}
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
};

export default EditZoneForm;
