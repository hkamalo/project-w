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
    border: '1px solid red',
    margin: '3em 0 2em 0',
  },
  descriptionEtapes: {
    border: '1px solid green',
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
          {/* <div>
            <h2>Découverte</h2>
            <p>
              Un moment d’échange avec Vous : Cernons vos envies en matière de
              style, de tissus, couleurs et personnalisations. Nous vous
              proposons un devis récapitulatif des prestations demandées et des
              matières choisies (sans engagement).
            </p>
          </div>
          <div>
            <h2>Atelier créatif</h2>
            <p>
              Vous créez votre tenue pour homme & femme : veste, gilet,
              pantalon, chemise, blouson, manteau, maille, chaussures &
              accessoires. Nous vous guidons parmi notre sélection de plus de
              300 tissus par saisons. Vous aurez aussi un large choix de
              doublures, boutons, de couleurs de fils, surpiqûres… Puis vous
              aurez la possibilité de choisir le design des cols, des poches,
              des revers…
            </p>
          </div>
          <div>
            <h2>Mesures</h2>
            <p>
              Cette étape dure une dizaine de minutes pendant lesquelles nous
              prenons vos mesures au corps et analysons votre posture naturelle.
            </p>
          </div>
          <div>
            <h2>Test</h2>
            <p>
              Nous vous faisons essayer un ou plusieurs de nos prototypes. Notre
              objectif est de nous assurer que nous avons bien compris vos
              attentes en termes de coupe et confort.
            </p>
          </div>
          <div>
            <h2>Livraison</h2>
            <p>
              4 à 5 semaines plus tard, nous nous retrouvons pour l’essayage
              final de votre commande et effectuer si besoin est, un dernier
              petit ajustement.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}
