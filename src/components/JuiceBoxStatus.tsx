import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const JuiceBoxStatusCard = () => {
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

  return (
    <Paper>
      <Typography variant="subtitle1">JuiceBox Status</Typography>
    </Paper>
  );
};
