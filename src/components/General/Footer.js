import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  Footer: {
    width: '100%',
    textAlign: 'center',
    background: 'var(--dark-grey)',
    padding: '1em',
  },
  Typography: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'var(--text-primary)',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& *': {
      display: 'flex',
      margin: 'auto',
    },
  },
  wild: {
    maxHeight: '24px',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.Footer}>
      <Typography variant="caption" className={classes.Typography}>
        © 2021 project-w
      </Typography>
    </footer>
  );
}

export default Footer;
