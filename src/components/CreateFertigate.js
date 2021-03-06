import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Container,
  FormControl,
  InputLabel,
  Button,
  Select,
  Divider,
} from '@material-ui/core';

import { useQueries, useMutation } from 'react-query';
import { getFert, getMe, runManualProgram } from '../utils/apiRequest';

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

  const queryResults = useQueries([
    { queryKey: 'fert', queryFn: getFert },
    { queryKey: 'me', queryFn: getMe },
  ]);
  const fertData = queryResults[0].data;
  const userData = queryResults[1].data;

  const [fertigationFormData, setFertigationFormData] = useState({
    propertyIndex: '0',
    stationIndex: '',
    fert1Name: '',
    fert1Index: '',
    fert2Name: '',
    fert2Index: '',
    fert3Name: '',
    fert3Index: '',
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFertigationFormData({ ...fertigationFormData, [name]: value });
    // console.log(fertigationFormData);
  };

  const runProgram = useMutation((programData) =>
    runManualProgram(programData)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fertigationFormData);
    try {
      // TODO Send data to DB
      // TODO new api route for run manual programme
      const programData = {
        propertyId: userData.properties[fertigationFormData.propertyIndex]._id,
        stationNumber:
          userData.properties[fertigationFormData.propertyIndex].zones[
            fertigationFormData.stationIndex
          ].stationNumber,
        fertRuntime: '1200', // in seconds - 20min station run time
      };
      console.log(userData);
      console.log(programData);
      const runStatus = await runProgram.mutate(programData);

      // const fertiliser = await createFertiliser({
      //   variables: { addFertiliserInput: fertigationFormData },
      // });
      // const runStatus = await runManualProgram({
      //   variables: {
      //     propertyId:
      //       userData.properties[fertigationFormData.propertyIndex]._id,
      //     stationNumber:
      //       userData.properties[fertigationFormData.propertyIndex].zones[
      //         fertigationFormData.stationIndex
      //       ].stationNumber,
      //     fertRuntime: '1200', // in seconds - 20min station run time
      //   },
      // });
      // console.log(runStatus);
      // history.push('/fertilisers');
      // if (!runStatus) {
      //   throw new Error('something went wrong!');
      // }
    } catch (err) {
      console.error(err);
    }
  };
  const classes = useStyles();

  if (queryResults[0].isLoading || queryResults[1].isLoading) {
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
            {/* <option aria-label="None" value="" /> */}
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
            {fertigationFormData.propertyIndex &&
              userData.properties[fertigationFormData.propertyIndex].zones.map(
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
        {fertigationFormData.stationIndex && (
          <RecipeCard
            propertyName={
              userData.properties[fertigationFormData.propertyIndex]
                .propertyName
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
                ? fertData[fertigationFormData.fert2Index]
                : null
            }
            fert3Obj={
              fertigationFormData.fert3Index
                ? fertData[fertigationFormData.fert3Index]
                : null
            }
          />
        )}
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
          RUN PROGRAME
        </Button>
      </form>
    </Container>
  );
};

export default CreateFertigate;
