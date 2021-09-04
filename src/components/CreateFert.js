import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
import { useQuery, useMutation } from 'react-query';
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
} from '@material-ui/core';
// import { ADD_FERTILISER } from '../utils/apiMutations';
// import { GET_FERTILISERS } from '../utils/apiQueries';
import { addFert } from '../utils/apiRequest';

const CreateFert = () => {
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
  }));
  const history = useHistory();

  // const [createFertiliser, { _createFertiliserError, _createFertiliserData }] =
  //   useMutation(ADD_FERTILISER, {
  //     refetchQueries: [{ query: GET_FERTILISERS }],
  //   });

  const addFertiliser = useMutation((fertData) => addFert(fertData), {
    onSuccess: () => {
      history.push('/fertilisers');
    },
  });

  const [fertiliserFormData, setFertiliserFormData] = useState({
    productBrand: '',
    productName: '',
    type: '',
    description: '',
    applicationRate: '',
    manufacturerLink: '',
    bunningsLink: '',
    imageLink: '',
  });

  const [formError, setFormError] = useState(false);
  // TODO add mutation

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFertiliserFormData({ ...fertiliserFormData, [name]: value });
  };
  const handleSubmit = async (e) => {
    // TODO: add some form validation? check material-UI docs.
    e.preventDefault();
    console.log(fertiliserFormData);
    try {
      // TODO Send data to DB
      if (
        !(
          fertiliserFormData.productBrand &&
          fertiliserFormData.productName &&
          fertiliserFormData.type &&
          fertiliserFormData.applicationRate
        )
      ) {
        setFormError(true);
        return;
      }
      const fertiliser = await addFertiliser.mutate(fertiliserFormData);
      console.log(fertiliser);
      // history.push('/fertilisers');
      if (!fertiliser) {
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
        Create a Fertiliser
      </Typography>
      <Divider />
      <br />
      <form className={classes.form}>
        <TextField
          className={classes.field}
          name="productBrand"
          label="Product Brand"
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
          required="true"
          error={formError}
        />
        <TextField
          className={classes.field}
          name="productName"
          label="Product Name"
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
          required="true"
          error={formError}
        />
        <FormControl>
          <InputLabel
            className={classes.label}
            htmlFor="outlined-age-native-simple"
            required="true"
            error={formError}
          >
            Product Type
          </InputLabel>
          <Select
            className={classes.field}
            fullWidth
            variant="outlined"
            native
            label="Product Type"
            onChange={handleInputChange}
            inputProps={{
              name: 'type',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value="Soil Conditoner">Soil Conditoner</option>
            <option value="NPK Fertiliser">NPK Fertiliser</option>
            <option value="Wetting Agent">Wetting Agent</option>
          </Select>
        </FormControl>
        <TextField
          className={classes.field}
          name="description"
          label="Product Description"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="manufacturerLink"
          label="Manufacturer Link"
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="applicationRate"
          label="Application rate (mL / m2)"
          required="true"
          error={formError}
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="bunningsLink"
          label="Bunnings Link"
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          className={classes.field}
          name="imageLink"
          label="Image Link"
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
          Save Fertiliser
        </Button>
      </form>
    </Container>
  );
};

export default CreateFert;
