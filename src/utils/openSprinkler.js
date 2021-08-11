import axios from 'axios';

const stationNames = async ({ openSprinklerAddress, openSprinklerKey }) => {
  const res = axios.get(`${openSprinklerAddress}jn`, {
    params: {
      pw: openSprinklerKey,
    },
  });
  // console.log(res);
  //
  const zones = res.data.snames.map((stnName, i) => ({
    stationName: stnName,
    stationNumber: i + 1,
    type: '',
    area: '',
  }));
  return zones;
};

export { stationNames };
