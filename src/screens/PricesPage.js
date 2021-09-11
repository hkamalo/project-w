import React, { useState } from 'react';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grow from '@material-ui/core/Grow';
import meetingImg from '../images/christina-wocintechchat-com-0hGVZGBnW7U-unsplash.jpg';
import LinearMeetingStepper from '../components/ForPricePage/MeetingSteps';

const useStyles = makeStyles({
  main: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#2A0800',
    fontFamily: 'Julius Sans One, sans-serif',
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
    margin: '3em 0 2em 0',
  },
  descriptionEtapes: {
    display: 'flex',
    justifyContent: 'center',
    width: '60em',
    height: '40em',
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
        <div className={classes.descriptionEtapes}>
          <LinearMeetingStepper />
        </div>
      </div>
    </>
  );
}
