import { makeStyles, createTheme } from '@material-ui/core/styles';
import { Fade, Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import modele1 from '../../images/kingsley-osei-abrah-fmuCylX5NKA-unsplash.jpg';
import modele2 from '../../images/francis-onyango-jWkz39H9AIg-unsplash.jpg';
import modele3 from '../../images/leon-ell-C8Q_zR8PDlA-unsplash.jpg';
import modele4 from '../../images/etty-fidele-oXyuooI7CQM-unsplash.jpg';
import modele5 from '../../images/ian-kiragu-SWFtLqgshU0-unsplash.jpg';
import modele6 from '../../images/terricks-noah-D880IVb9PzM-unsplash.jpg';
import modele7 from '../../images/leon-ell-f6HbVnGtNnY-unsplash.jpg';
import modele8 from '../../images/tyler-nix-QcHvCLwXByA-unsplash.jpg';
import modele9 from '../../images/eye-for-ebony-QhoDs-dFIdE-unsplash.jpg';

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
    textAlign: 'center',
    width: 320 * 0.8,
    height: 480 * 0.8,
  },
  bigGrid: {
    border: '1px solid purple',
    width: '60vw',
    marginBottom: '20em',
    display: 'flex',
    justifyContent: 'center',
  },
  smallGrid: {
    border: '1px solid green',
    display: 'flex',
    justifyContent: 'center',
  },
  extraSmallGrid: {
    border: '1px solid blue',
    display: 'flex',
    justifyContent: 'center',
  },
  photoModele: {
    width: '100%',
    height: '100%',
  },
});

export default function NormalClothes() {
  const classes = useStyles();

  const modeles = [
    modele1,
    modele2,
    modele3,
    modele4,
    modele5,
    modele6,
    modele7,
    modele8,
    modele9,
  ];

  return (
    <>
      <Fade in timeout={1000} style={{ transitionDelay: '200ms' }}>
        <div>
          <Grid
            className={classes.bigGrid}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={8}
          >
            <Grid
              container
              className={classes.smallGrid}
              direction="row"
              justifyContent="center"
              alignItems="center"
              item
              xs={12}
              spacing={3}
            >
              {modeles.map((modele) => (
                <Grid className={classes.extraSmallGrid} item xs={4}>
                  <Card className={classes.paper}>
                    <CardMedia
                      className={classes.photoModele}
                      image={modele}
                      title="modele"
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </div>
      </Fade>
    </>
  );
}
