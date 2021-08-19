import React from 'react';
import { Link } from 'react-tiger-transition';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { Fade } from '@material-ui/core';
import homeImage from '../images/clem-onojeghuo-24vjqGCu0pI-unsplash.jpg';
import CategoriesSelect from '../components/ForHomePage/CategoriesSelect';

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
    border: '2px solid blue',
    padding: '0px 20px 0px 0px',
    width: '100vw',
    height: '82vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeImg: {
    border: '2px solid purple',
    margin: 0,
    overflow: 'hidden',
    width: 1920 * 0.75,
    height: 1259 * 0.8,
    position: 'relative',
  },
  text: {
    border: '1px solid red',
    color: '#2A0800',
    width: '30vw',
    padding: '30px 30px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Julius Sans One, sans-serif',
    fontWeight: 'bold',
    fontSize: 50,
  },
  image: {},
  secondPart: {
    border: '1px solid red',
    width: '100vw',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  explicationConcept: {
    border: '1px solid black',
    width: '60vw',
    marginTop: '10vh',
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#2A0800',
    opacity: 0.9,
  },
  text2: {
    margin: 10,
    border: '1px solid green',
    width: '70%',
    fontFamily: 'Quicksand, sans-serif',
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFAEC',
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
            <p>Bienvenue</p>.<p>Welcome</p>
          </div>
        </div>
        <div className={classes.explicationConcept}>
          <p className={classes.text2}>
            {' '}
            Une idée, une envie ?
            <br />
            Nous serons avec vous pour réaliser vos créations.
          </p>
        </div>
        <div className={classes.secondPart}>
          <CategoriesSelect />
        </div>
      </div>
    </>
  );
}
