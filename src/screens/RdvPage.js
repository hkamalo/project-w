/* eslint-disable react/jsx-props-no-spreading */
// ------------------ IMPORT COMPONENTS & STYLES -------------//
import Backdrop from '@material-ui/core/Backdrop';
import { IconButton, Fade, Modal, Grow, InputBase } from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

// ---------------------- STYLE CSS -------------------------//

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    '& .MuiTextField-root': {
      display: 'flex',
      paddingTop: '1em',
      color: '#87CEFA',
    },
  },
  contact: {
    height: '100vh',
    width: '100%',
    paddingTop: 50,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 30,
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: '3em',
    color: '#87CEFA',
  },
  formulaire: {
    padding: '5em',
    maxWidth: '60ch',
    margin: '2em auto',
    borderRadius: '1rem',
    borderLeft: '1px solid #87CEFA',
    borderRight: '1px solid #87CEFA',
    [theme.breakpoints.down('sm')]: {
      padding: 20,
      width: '20em',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  inputBase: {
    display: 'flex',
    height: '7vh',
    padding: theme.spacing(2),
    color: '#87CEFA',
    '&:hover': {
      borderBottom: '1px solid #87CEFA',
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      padding: 0,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  messageField: {
    display: 'flex',
    height: '10vh',
    padding: theme.spacing(2),
    color: '#87CEFA',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      border: '1px solid #87CEFA',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  button: {
    padding: 14,
    marginTop: 22,
    paddingTop: 20,
    margin: 'auto',
    display: 'flex',
    marginBottom: 12,
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: '#87CEFA',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #87CEFA',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
    borderRadius: theme.shape.borderRadius,
    fontFamily: 'Poppins',
    width: '40vh',
    textAlign: 'center',
  },
});
// --------------------------- FONCTION CONTACT --------------------------//

export default function RdvPage() {
  const apiMail = process.env.API_URL;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit, reset } = useForm();
  const {
    title,
    formulaire,
    inputBase,
    button,
    modal,
    paper,
    messageField,
    contact,
  } = useStyles();

  const onSubmit = (form) => {
    axios
      .post(`${apiMail}`, form)
      .then((res) => reset())
      .catch((err) => {
        throw err;
      });
  };

  return (
    <Grow in timeout={2100} style={{ transitionDelay: '700ms' }}>
      <div className={contact}>
        <h2 className={title}>Contact</h2>
        <form
          className={formulaire}
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          action="send"
        >
          <InputBase
            className={inputBase}
            id="outlined-basic"
            placeholder="Entreprise"
            variant="outlined"
            required
            color="#1ba098"
            {...register('company')}
          />
          <InputBase
            className={inputBase}
            id="outlined-basic"
            placeholder="Prénom"
            variant="outlined"
            required
            {...register('firstname')}
          />
          <InputBase
            className={inputBase}
            id="outlined-basic"
            placeholder="Nom"
            variant="outlined"
            required
            {...register('lastname')}
          />
          <InputBase
            className={inputBase}
            id="outlined-basic"
            placeholder="votre@email.com"
            variant="outlined"
            type="email"
            required
            {...register('email')}
          />
          <InputBase
            className={messageField}
            id="outlined-multiline-basic"
            multiline
            placeholder="Votre message"
            name="message"
            defaultValue=""
            variant="outlined"
            required
            {...register('message')}
          />
          <div>
            <IconButton
              className={button}
              variant="contained"
              type="submit"
              onClick={handleOpen}
            >
              <SendRoundedIcon />
            </IconButton>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={paper}>
                  <p>
                    Merci pour votre message, je reviens vers vous dans les
                    meilleurs délais
                  </p>
                </div>
              </Fade>
            </Modal>
          </div>
        </form>
      </div>
    </Grow>
  );
}
