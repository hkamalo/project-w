/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link, glide } from 'react-tiger-transition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { AppBar, Toolbar, Button, IconButton, Grow } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {
  makeStyles,
  createTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Grow appear={false} in={!trigger} timeout={800}>
      {children}
    </Grow>
  );
}

const theme = createTheme({
  overrides: {
    MuiButton: {
      label: {
        color: '#87CEFA',
        fontFamily: 'Poppins, sans-serif',
      },
    },
  },
});

const useStyles = makeStyles({
  menu: {
    width: '100vw',
    height: '30px',
    display: 'flex',
    padding: 20,
    justifyContent: 'space-between',
    position: 'fixed',
    top: '0px',
    right: 0,
    color: '#deb992',
    background: '#051622',
    zIndex: '1',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      diplay: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
    },
  },
  link: {
    display: 'flex',
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      diplay: 'flex',
      padding: 0,
    },
  },
});

glide({
  name: 'glide-left',
  duration: 800,
});

export default function MenuBar(props) {
  const classes = useStyles();
  const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} color="#87CEFA" />;
  const iconGithub = <FontAwesomeIcon icon={faGithubSquare} color="#87CEFA" />;
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.menu}>
            <div className={classes.links}>
              <IconButton
                variant="link"
                href="https://www.linkedin.com/in/heran%C3%A7a-kamalo-5075bb124/"
                target="_blank"
              >
                {iconLinkedin}
              </IconButton>
              <IconButton
                variant="link"
                href="https://github.com/hkamalo"
                target="_blank"
              >
                {iconGithub}
              </IconButton>
            </div>
            <div>
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
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
