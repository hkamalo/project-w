import { makeStyles, createTheme } from '@material-ui/core/styles';
import { Fade, Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const theme = createTheme({
  overrides: {
    MuiGrid: {
      item: {
        flexBasis: 0,
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    border: '1px solid blue',
    width: '60vw',
    marginBottom: '20em',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    padding: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '20em',
    height: '20em',
  },
});

export default function NormalClothes() {
  const classes = useStyles();

  function FormRow() {
    return (
      <>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img src="" alt="" />
          </Paper>
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
          <Grid
            container
            spacing={8}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              item
              xs={12}
              spacing={3}
            >
              <FormRow />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              item
              xs={12}
              spacing={3}
            >
              <FormRow />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              item
              xs={12}
              spacing={3}
            >
              <FormRow />
            </Grid>
          </Grid>
        </div>
      </Fade>
    </>
  );
}
