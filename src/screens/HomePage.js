import React from 'react';
import { Link } from 'react-tiger-transition';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { Fade } from '@material-ui/core';

const theme = createTheme({
  overrides: {
    MuiButton: {
      label: {
        color: '#f1f1f1',
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: 10,
    },
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <Fade
          in
          direction="right"
          timeout={2100}
          style={{ transitionDelay: '800ms' }}
        >
          <div>
            <p>text</p>
          </div>
        </Fade>
      </div>
    </>
  );
}
