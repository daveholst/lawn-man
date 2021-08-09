import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Container,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  TextField,
  Button,
  Select,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1rem',
  },
  field: {
    margin: '.5rem auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginLeft: '15px',
    marginTop: '2px',
  },
  button: {
    margin: '.5rem auto',
    height: '60px',
    fontSize: '1.5rem',
    fontWeight: '400',
  },
}));

const CreateProperty = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h2">Create a Property</Typography>
      <hr />
      <br />
      <form className={classes.form}>
        <TextField
          className={classes.field}
          id="outlined-basic"
          label="Property Name"
          variant="outlined"
          fullWidth
        />
        <TextField
          className={classes.field}
          id="outlined-basic"
          label="Property Address"
          variant="outlined"
          fullWidth
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
            // value={state.age}
            // value=""
            // onChange={handleChange}
            // onChange=""
            label="Climate Zone"
            inputProps={{
              name: 'age',
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
        <Button
          className={classes.button}
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

export default CreateProperty;
