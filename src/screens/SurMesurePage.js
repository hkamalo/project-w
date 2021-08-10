import React from 'react';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { Screen } from 'react-tiger-transition';
import { Grow } from '@material-ui/core';

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: 10,
    },
  },
});

export default function SurMesurePage() {
  const classes = useStyles();

  return (
    <>
      <div>text</div>
    </>
  );
}
