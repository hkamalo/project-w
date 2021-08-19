/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link, glide } from 'react-tiger-transition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { AppBar, Toolbar, Button, IconButton, Grow } from '@material-ui/core';
import {
  makeStyles,
  createTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

const theme = createTheme({
  overrides: {
    MuiButton: {
      label: {
        color: '#2A0800',
        fontFamily: 'Julius Sans One, sans-serif',
        fontSize: '16px',
      },
    },
  },
});

const useStyles = makeStyles({
  menu: {
    width: '100vw',
    height: '15vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      diplay: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
    },
  },
});

glide({
  name: 'glide-left',
  duration: 800,
});

export default function StaticMenu(props) {
  const classes = useStyles();
  const iconFacebook = <FontAwesomeIcon icon={faFacebook} color="#FFFAEC" />;
  const iconInstagram = <FontAwesomeIcon icon={faInstagram} color="#FFFAEC" />;
  return (
    <>
      <div className={classes.menu}>
        <MuiThemeProvider theme={theme}>
          <Link exact to="/" transition="glide-left">
            <Button>Accueil</Button>
          </Link>
          <Link exact to="/surmesure" transition="glide-left">
            <Button>Sur-Mesure</Button>
          </Link>
          <Link exact to="/tarifs" transition="glide-left">
            <Button>Délais & Tarifs</Button>
          </Link>
          <Link exact to="/rendezvous" transition="glide-left">
            <Button>Rendez-vous</Button>
          </Link>
        </MuiThemeProvider>
      </div>
    </>
  );
}
