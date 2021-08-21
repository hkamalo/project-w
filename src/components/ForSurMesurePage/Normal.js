import { makeStyles, createTheme } from '@material-ui/core/styles';
import { Fade, Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Normal() {
  const classes = useStyles();

  function FormRow() {
    return (
      <>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Fade in timeout={1000} style={{ transitionDelay: '200ms' }}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <FormRow />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <FormRow />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <FormRow />
            </Grid>
          </Grid>
        </div>
      </Fade>
    </>
  );
}
