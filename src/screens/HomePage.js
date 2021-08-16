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
    '& > *': {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  homeImg: {
    margin: 0,
    overflow: 'hidden',
  },
  text: {
    position: 'absolute',
    left: 20,
    top: 10 * 15,
    width: '30em',
    height: '20em',
    color: 'white',
  },
  explicationConcept: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
  },
  text2: {
    margin: 10,
    width: '70vw',
    height: '20em',
    textAlign: 'center',
  },
  image: {
    width: 1920 * 0.8,
    height: 1259 * 0.8,
  },
  secondPart: {
    background: '#fff',
    width: '60em',
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.homeImg}>
          <img className={classes.image} src={homeImage} alt="dress-home" />
        </div>
        <div className={classes.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In a hic
          laboriosam incidunt quibusdam cupiditate. Culpa facilis, corrupti
          distinctio fuga ratione assumenda iste maiores, explicabo in, eligendi
          minima repellendus iusto!
        </div>
        <div className={classes.secondPart}>
          <CategoriesSelect />
          <div className={classes.explicationConcept}>
            <p className={classes.text2}>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In a hic
              laboriosam incidunt quibusdam cupiditate. Culpa facilis, corrupti
              distinctio fuga ratione assumenda iste maiores, explicabo in,
              eligendi minima repellendus iusto!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
