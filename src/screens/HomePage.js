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
  firstPart: {
    marginTop: '14vh',
    border: '2px solid blue',
    width: '100vw',
    height: '80vh',
  },
  homeImg: {
    border: '2px solid purple',
    margin: 0,
    overflow: 'hidden',
    width: 1920 * 0.75,
    height: 1259 * 2,
    position: 'relative',
  },
  text: {
    border: '1px solid red',
    color: '#2A0800',
    width: '30vw',
    height: '30vh',
  },
  image: {},
  secondPart: {
    border: '1px solid red',
    width: '100vw',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  explicationConcept: {
    border: '1px solid black',
    width: '100vw',
    height: '14vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
  },
  text2: {
    margin: 10,
    border: '1px solid green',
    width: '70%',
    textAlign: 'center',
    color: 'black',
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In a hic
            laboriosam incidunt quibusdam cupiditate. Culpa facilis, corrupti
            distinctio fuga ratione assumenda iste maiores, explicabo in,
            eligendi minima repellendus iusto!
          </div>
        </div>
        <div className={classes.explicationConcept}>
          <p className={classes.text2}>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In a hic
            laboriosam incidunt quibusdam cupiditate. Culpa facilis, corrupti
            distinctio fuga ratione assumenda iste maiores, explicabo in,
            eligendi minima repellendus iusto!
          </p>
        </div>
        <div className={classes.secondPart}>
          <CategoriesSelect />
        </div>
      </div>
    </>
  );
}
