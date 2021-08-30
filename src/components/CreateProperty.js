import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
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
  Link,
  Divider,
  CircularProgress,
  Hidden,
} from '@material-ui/core';
// import { ADD_PROPERTY, ADD_ZONES } from '../utils/apiMutations';
import { useMutation, query } from 'react-query';
import { addProperty, addZones } from '../utils/apiRequest';
import { stationNames } from '../utils/openSprinkler';

// import { GET_ME } from '../utils/apiQueries';

const CreateProperty = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '1rem',
    },
    h2: {
      marginBottom: '6px',
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
    progress: {
      margin: '.5rem auto',
    },
  }));
  const history = useHistory();

  // const [createProperty, { _createPropertyError, _createPropertyData }] =
  //   useMutation(ADD_PROPERTY, {
  //     refetchQueries: [{ query: GET_ME }],
  //   });

  const addNewProperty = useMutation(
    (newPropertyData) => addProperty(newPropertyData)
    // { onSuccess: () => useQueryClient.invalidateQueries() }
  );

  const addNewZones = useMutation((newZonesData) => addZones(newZonesData), {
    // onSuccess: () => useQueryClient.invalidateQueries(),
  });

  // const [createZones, { _createZonesError, _createZonesData }] = useMutation(
  //   ADD_ZONES,
  //   {
  //     refetchQueries: [{ query: GET_ME }],
  //   }
  // );

  const [propertyFormData, setPropertyFormData] = useState({
    propertyName: '',
    address: '',
    juiceBoxId: '',
    openSprinklerAddress: '',
    openSprinklerKey: '',
    climate: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setPropertyFormData({ ...propertyFormData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(propertyFormData);
    try {
      setIsLoading(true);
      // const { data } = await createProperty({
      //   variables: { ...propertyFormData },
      // });
      const data = await addNewProperty.mutate(propertyFormData);
      const stations = await stationNames(propertyFormData);
      await addNewZones.mutate({
        propertyName: propertyFormData.propertyName,
        zones: stations,
      });
      // const cZres = await createZones({
      //   variables: {
      //     propertyName: propertyFormData.propertyName,
      //     addZonesInput: stations,
      //   },
      // });
      // !! seems to be jumping the gun here?
      history.push('/dashboard');
      if (!data) {
        throw new Error('something went wrong!');
      }
    } catch (err) {
      console.error(err);
      // TODO alert front end on failure
      // setShowAlert(true);
    }
  };
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h2" className={classes.h2}>
        Create a Property
      </Typography>
      <Divider />
      <br />
      <form className={classes.form}>
        <TextField
          className={classes.field}
          name="propertyName"
          label="Property Name"
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="address"
          label="Property Address"
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="juiceBoxId"
          label="Juice Box ID"
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="openSprinklerAddress"
          label="Open Sprinkler Address"
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="openSprinklerKey"
          label="Open Sprinkler API Key"
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            <option value="Temperate">Temperate</option>
            <option value="Cool">Cool</option>
          </Select>
        </FormControl>
        <Link href="https://www.gardenexpress.com.au/australian-climate-guide/">
          If you are unsure of your climate zone, click here for further
          information.
        </Link>
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
          Save Property
        </Button>
        {isLoading && <CircularProgress className={classes.progress} />}
      </form>
    </Container>
  );
};

export default CreateProperty;
