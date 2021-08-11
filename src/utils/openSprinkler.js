import axios from 'axios';

const stationNames = async ({ openSprinklerAddress, openSprinklerKey }) => {
  const res = await axios.get(`${openSprinklerAddress}jn`, {
    params: {
      pw: openSprinklerKey,
    },
  });
  // console.log(res);
  //
  const zones = res.data.snames.map((stnName, i) => ({
    stationName: stnName,
    stationNumber: (i + 1).toString(),
    type: '',
    area: '',
  }));
  return zones;
};

export { stationNames };
