import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
// ! couldnt use import from a js file? zzZzz
import * as apiRequests from '../utils/apiRequest';

interface JuiceBoxStatus {
  juiceBoxStatus: {
    lastKnownWeight: number;
    rawTankWeight: number;
    calibrationOffset: number;
    calibratedTankWeight(): number;
    flowRate: number;
    lastUpdated: Date;
    fertigationBypass: boolean;
    fillSolenoid: boolean;
    fertigating: boolean;
    filling: boolean;
    fertilisers: {
      fert1: {
        type: string;
        target: number;
        amountInTank: number;
        inTank: boolean;
      };
      fert2: {
        type: string;
        target: number;
        amountInTank: number;
        inTank: boolean;
      };
      fert3: {
        type: string;
        target: number;
        amountInTank: number;
        inTank: boolean;
      };
    };
    pump1: {
      type: string;
      amountRemaining: number;
      pumpRunning: boolean;
      pumpRate: number; // mL/s
    };
  };
}

const JuiceBoxStatusCard = () => {
  // TODO: change this to webSockets?
  // pull in juiceBox status from the API TODO:
  const { isLoading, isError, data, error } = useQuery<JuiceBoxStatus, Error>(
    'juiceBoxStatus',
    apiRequests.getJuiceBoxStatus,
    {
      refetchInterval: 2000,
    }
  );

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: 'auto',
      padding: '10px',
      marginTop: '15px',
      width: 350,
    },
    image: {
      width: 128,
      height: 128,
    },
    editForm: {
      marginTop: '1rem',
    },
    editFormHidden: {
      display: 'none',
    },
    editFormVisible: {
      display: 'none',
    },
    field: {
      marginBottom: '.7rem',
    },
  }));
  const classes = useStyles();
  if (isError) {
    return (
      <Paper>
        <Typography variant="subtitle1">{error}</Typography>
      </Paper>
    );
  }

  if (isLoading) {
    return (
      <Paper>
        <Typography variant="subtitle1">Loading...</Typography>
      </Paper>
    );
  }

  console.log(data.juiceBoxStatus);
  return (
    <Paper>
      <Typography variant="subtitle1">JuiceBox Status</Typography>
      <p>{data.juiceBoxStatus.flowRate}</p>
    </Paper>
  );
};

export default JuiceBoxStatusCard;
