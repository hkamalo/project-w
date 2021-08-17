import React from 'react';
import { Navigation } from 'react-tiger-transition';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, CssBaseline } from '@material-ui/core';
import MenuBar from './components/General/MenuBar';
import Main from './components/General/Main';
import Footer from './components/General/Footer';
import StaticMenu from './components/General/StaticMenu';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    position: 'relative',
    bottom: 0,
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <>
      <Navigation>
        <div className={classes.root}>
          <CssBaseline />
          <MenuBar />
          <StaticMenu />
          <Main />
        </div>
      </Navigation>
      <Footer className={classes.footer} />
    </>
  );
}
