import React from 'react';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { Screen } from 'react-tiger-transition';
import { Grow } from '@material-ui/core';
import modeleBg from '../images/leon-ell-f6HbVnGtNnY-unsplash.jpg';
import Normal from '../components/ForSurMesurePage/Normal';

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    margin: 10,
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageTop: {
    border: '1px solid red',
    overflow: 'hidden',
    width: '100vw',
    height: '55vh',
    position: 'relative',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    border: '1px solid blue',
    width: 1920,
    height: 2879,
    position: 'absolute',
    top: '-120em',
  },
  select: {
    fontFamily: 'Quicksand, sans-serif',
    fontSize: 13,
    marginTop: 20,
  },
});

export default function SurMesurePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.main}>
        <div className={classes.imageTop}>
          <img className={classes.image} src={modeleBg} alt="modele-bg" />
        </div>
        <div>
          <select
            className={classes.select}
            name="type-selection"
            id="select-types"
          >
            <option key="robes" value="">
              --Types--
            </option>
            <option key="robes" value="robes">
              Robes
            </option>
            <option key="jupes" value="jupes">
              Jupes
            </option>
            <option key="vestes" value="vestes">
              Vestes
            </option>
          </select>
          <Normal />
        </div>
      </div>
    </>
  );
}
