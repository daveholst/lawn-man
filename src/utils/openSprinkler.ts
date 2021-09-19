import axios, { AxiosResponse } from 'axios';

interface ZoneData {
  stationName: string;
  stationNumber: string;
  type: string;
  area: string;
}

interface OpenSprinkler {
  openSprinklerAddress: string;
  openSprinklerKey: string;
}

/*eslint-disable */
interface OpenSprinklerData {
  masop2: number[];
  ignore_rain: number[];
  ignore_sn1: number[];
  ignore_sn2: number[];
  stn_dis: number[];
  stn_seq: number[];
  stn_spe: number[];
  snames: string[];
}
/* eslint-enable */

// TODO Lol --- what even happens if it fails xD
const stationNames = async ({
  openSprinklerAddress,
  openSprinklerKey,
}: OpenSprinkler): Promise<ZoneData[]> => {
  const res: AxiosResponse<OpenSprinklerData> = await axios.get(
    `${openSprinklerAddress}jn`,
    {
      params: {
        pw: openSprinklerKey,
      },
    }
  );
  const zones: Array<ZoneData> = res.data.snames.map(
    (stnName: string, i: number): ZoneData => ({
      stationName: stnName,
      stationNumber: (i + 1).toString(),
      type: '',
      area: '',
    })
  );
  return zones;
};

export { stationNames };
