import React from 'react';
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

const EditZoneForm = () => {
  const useStyles = makeStyles((theme) => ({
    root: {},
  }));
  const classes = useStyles();
  return (
    <Container>
      <form className={classes.editForm}>
        <TextField
          className={classes.field}
          name="propertyName"
          label="Property Name"
          variant="outlined"
          fullWidth
          // onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="address"
          label="Property Address"
          variant="outlined"
          fullWidth
          // onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="juiceBoxId"
          label="Juice Box ID"
          variant="outlined"
          fullWidth
          // onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="openSprinklerAddress"
          label="Open Sprinkler Address"
          variant="outlined"
          fullWidth
          // onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="openSprinklerKey"
          label="Open Sprinkler API Key"
          variant="outlined"
          fullWidth
          // onChange={handleInputChange}
        />
        {/* <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel> */}
        <FormControl>
          <InputLabel
            className={classes.label}
            htmlFor="outlined-age-native-simple"
          >
            Climate Zone
          </InputLabel>
          <Select
            className={classes.field}
            fullWidth
            variant="outlined"
            native
            label="Climate Zone"
            // onChange={handleInputChange}
            inputProps={{
              name: 'climate',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value="Tropical">Tropical</option>
            <option value="Mild Tropical">Mild Tropical</option>
            <option value="Semi-arid">Semi-arid</option>
            <option value="Arid">Arid</option>
            <option value="Mild Tropical">Mild Tropical</option>
            <option value="Tropical">Tropical</option>
          </Select>
        </FormControl>
        <Link href="https://www.gardenexpress.com.au/australian-climate-guide/">
          If you are unsure of your climate zone, click here for further
          information.
        </Link>
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
          Save Property
        </Button>

        {/* <FormHelperText id="my-helper-text">
      We'll never share your email.
    </FormHelperText> */}
      </form>
    </Container>
  );
};

EditZoneForm.propTypes = {
  // loginOnClick: PropTypes.func,
};

export default EditZoneForm;
