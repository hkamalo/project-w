import React from 'react';
import { Link } from 'react-tiger-transition';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { Fade } from '@material-ui/core';
import homeImage from '../images/clem-onojeghuo-24vjqGCu0pI-unsplash.jpg';
import CategoriesSelect from '../components/ForHomePage/CategoriesSelect';
import sewingThreadImg from '../images/marcus-urbenz-y5CsaPXynjQ-unsplash.jpg';

const theme = createTheme({
  overrides: {
    MuiButton: {
      label: {
        color: '#f1ff1',
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstPart: {
    padding: '0px 0px 0px 0px',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    position: 'relative',
    border: '1px solid #2A0800',
  },
  homeImg: {
    margin: 0,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    border: '1px solid #2A0800',
  },
  text: {
    color: '#fff',
    position: 'absolute',
    bottom: '1em',
    left: '-1em',
    width: '30vw',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Julius Sans One, sans-serif',
    fontSize: 60,
  },
  image: {
    position: 'relative',
    top: '5em',
    width: 1920 * 1.3,
    height: 1259 * 1.3,
  },
  secondPart: {
    width: '100vw',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5em 0 10em 0',
  },
  explicationConcept: {
    width: '100vw',
    margin: '15em 0 0em 0',
    paddingTop: '0em',
    height: '40vh',
    display: 'flex',
    justifyContent: 'flex-start',
    opacity: 0.9,
  },
  text2: {
    margin: '0 0 0 2em',
    width: '70%',
    height: 427,
    fontFamily: 'Quicksand, sans-serif',
    fontSize: 60,
    textAlign: 'center',
    color: '#2A0800',
    display: 'flex',
    alignItems: 'center',
  },
  sewingImg: {
    width: 640,
    height: 427,
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.firstPart}>
          <div className={classes.homeImg}>
            <img className={classes.image} src={homeImage} alt="dress-home" />
          </div>
          <div className={classes.text}>
            <p>Bienvenue</p>
            <h1>Welcome</h1>
          </div>
        </div>
        <div className={classes.explicationConcept}>
          <img
            className={classes.sewingImg}
            src={sewingThreadImg}
            alt="dress-home"
          />
          <p className={classes.text2}>
            {' '}
            Une idée, une envie ?
            <br />
            Nous mettons notre savoir-faire à votre service.
          </p>
        </div>
        <div className={classes.secondPart}>
          <CategoriesSelect />
        </div>
      </div>
    </>
  );
}
