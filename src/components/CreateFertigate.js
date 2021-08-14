import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Container,
  FormControl,
  Paper,
  Input,
  InputLabel,
  FormHelperText,
  TextField,
  Button,
  Select,
  Link,
  Divider,
} from '@material-ui/core';
import { ADD_FERTILISER } from '../utils/apiMutations';
import { GET_FERTILISERS, GET_ME } from '../utils/apiQueries';
import ZoneCard from './ZoneCard';
import RecipeCard from './RecipeCard';

const CreateFertigate = () => {
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

  const [createFertiliser, { _createFertiliserError, _createFertiliserData }] =
    useMutation(ADD_FERTILISER, {
      refetchQueries: [{ query: GET_FERTILISERS }],
    });

  const { loading, error: userErrorRes, data: userDataRes } = useQuery(GET_ME);
  const userData = userDataRes?.me;
  const {
    loading: fertLoading,
    error: fertErrorRes,
    data: fertDataRes,
  } = useQuery(GET_FERTILISERS);
  const fertData = fertDataRes?.fertilisers;

  const [fertigationFormData, setFertigationFormData] = useState({
    propertyIndex: '0',
    stationIndex: '',
    fert1Name: '',
    fert1Index: '',
    fert2Name: '',
    fert2Index: '',
    fert3Name: '',
    fert3Index: '',
    type: '',
    description: '',
    applicationRate: '',
    manufacturerLink: '',
    bunningsLink: '',
    imageLink: '',
  });
  // TODO add mutation

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFertigationFormData({ ...fertigationFormData, [name]: value });
    // console.log(fertigationFormData);
  };
  const handleSubmit = async (e) => {
    // TODO: add some form validation? check material-UI docs.
    e.preventDefault();
    console.log(fertigationFormData);
    try {
      // TODO Send data to DB
      const fertiliser = await createFertiliser({
        variables: { addFertiliserInput: fertigationFormData },
      });
      console.log(fertiliser);
      history.push('/fertilisers');
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
  if (loading || fertLoading) {
    return <h1>LOADING....</h1>;
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h2" className={classes.h2}>
        Create a Fertigate Programme
      </Typography>
      <Divider />
      <br />
      <form className={classes.form}>
        <FormControl>
          <InputLabel
            className={classes.label}
            htmlFor="outlined-age-native-simple"
          >
            Property
          </InputLabel>
          <Select
            className={classes.field}
            fullWidth
            variant="outlined"
            native
            label="Property"
            onChange={handleInputChange}
            inputProps={{
              name: 'propertyIndex',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {userData.properties.map((property, index) => (
              <option value={index} key={property._id}>
                {property.propertyName}
              </option>
            ))}
          </Select>
        </FormControl>
        {/* Select station / zone */}
        <FormControl>
          <InputLabel
            className={classes.label}
            htmlFor="outlined-age-native-simple"
          >
            Station
          </InputLabel>
          <Select
            className={classes.field}
            fullWidth
            variant="outlined"
            native
            label="Station Number"
            onChange={handleInputChange}
            inputProps={{
              name: 'stationIndex',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {userData.properties[fertigationFormData.propertyIndex].zones.map(
              (zone, index) => (
                <option value={index} key={zone._id}>
                  {zone.stationName}
                </option>
              )
            )}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel
            className={classes.label}
            htmlFor="outlined-age-native-simple"
          >
            Fertiliser 1
          </InputLabel>
          <Select
            className={classes.field}
            fullWidth
            variant="outlined"
            native
            label="Fertiliser 1"
            onChange={handleInputChange}
            inputProps={{
              name: 'fert1Index',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {fertData.map((fert, index) => (
              <option value={index} key={fert._id}>
                {fert.productBrand} {fert.productName}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel
            className={classes.label}
            htmlFor="outlined-age-native-simple"
          >
            Fertiliser 2
          </InputLabel>
          <Select
            className={classes.field}
            fullWidth
            variant="outlined"
            native
            label="Fertiliser 2"
            onChange={handleInputChange}
            inputProps={{
              name: 'fert2Index',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {fertData.map((fert, index) => (
              <option value={index} key={fert._id}>
                {fert.productBrand} {fert.productName}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel
            className={classes.label}
            htmlFor="outlined-age-native-simple"
          >
            Fertiliser 3
          </InputLabel>
          <Select
            className={classes.field}
            fullWidth
            variant="outlined"
            native
            label="Fertiliser 3"
            onChange={handleInputChange}
            inputProps={{
              name: 'fert3Index',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {fertData.map((fert, index) => (
              <option value={index} key={fert._id}>
                {fert.productBrand} {fert.productName}
              </option>
            ))}
          </Select>
        </FormControl>
        {/* TODO: Recipe card in here */}
        <RecipeCard
          propertyName={
            userData.properties[fertigationFormData.propertyIndex].propertyName
          }
          stationName={
            fertigationFormData.stationIndex
              ? userData.properties[fertigationFormData.propertyIndex].zones[
                  fertigationFormData.stationIndex
                ].stationName
              : ''
          }
          stationArea={
            // console.log(
            //   userData.properties[fertigationFormData.propertyIndex].zones[
            //     fertigationFormData.stationIndex
            //   ].area
            // )
            fertigationFormData.stationIndex
              ? userData.properties[fertigationFormData.propertyIndex].zones[
                  fertigationFormData.stationIndex
                ].area
              : ''
          }
          fert1Obj={
            fertigationFormData.fert1Index
              ? fertData[fertigationFormData.fert1Index]
              : null
          }
          fert2Obj={
            fertigationFormData.fert2Index
              ? fertData[fertigationFormData.fert1Index]
              : null
          }
          fert3Obj={
            fertigationFormData.fert3Index
              ? fertData[fertigationFormData.fert1Index]
              : null
          }
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

export default CreateFertigate;
