import React, { useState } from 'react';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grow from '@material-ui/core/Grow';
import meetingImg from '../images/christina-wocintechchat-com-0hGVZGBnW7U-unsplash.jpg';

const useStyles = makeStyles({
  main: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    textAlign: 'center',
    width: 640 * 1.3,
    height: 427 * 1.3,
    borderRadius: 0,
  },
  ImgDesc: {
    width: '100%',
    height: '100%',
  },
  text: {
    border: '1px solid red',
    color: 'red',
  },
});

export default function PricesPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.main}>
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.ImgDesc}
              image={meetingImg}
              title="modele"
            />
          </Card>
        </div>
        <div className={classes.text}>
          <p> 5 étapes </p>
        </div>
        <div>
          <h2>Découverte</h2>
        </div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
      </div>
    </>
  );
}
