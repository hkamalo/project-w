import React, { useState } from 'react';
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((them) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    marginTop: them.spacing(1),
    marginRight: them.spacing(1),
  },
  actionsContainer: {
    marginBottom: them.spacing(2),
  },
  resetContainer: {
    padding: them.spacing(3),
  },
  steps: {
    marginTop: them.spacing(2),
    marginBottom: them.spacing(2),
  },
}));

const theme = createTheme({
  overrides: {
    MuiStepLabel: {
      label: {
        fontSize: '22px',
        color: '#2A0800',
        fontFamily: 'Julius Sans One, sans-serif',
      },
    },
  },
});

function getSteps() {
  return [
    'Atelier Découverte',
    'Moment Création',
    'Prises des mesures',
    'Essayage',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Un moment d’échange avec Vous : Cernons vos envies en matière de
      style, de tissus, couleurs et personnalisations. Nous vous
      proposons un devis récapitulatif des prestations demandées et des
      matières choisies (sans engagement).`;
    case 1:
      return `Vous créez votre tenue pour homme & femme : veste, gilet,
      pantalon, chemise, blouson, manteau, maille, chaussures &
      accessoires. Nous vous guidons parmi notre sélection de plus de
      300 tissus par saisons. Vous aurez aussi un large choix de
      doublures, boutons, de couleurs de fils, surpiqûres… Puis vous
      aurez la possibilité de choisir le design des cols, des poches,
      des revers…`;
    case 2:
      return `Cette étape dure une dizaine de minutes pendant lesquelles nous
      prenons vos mesures au corps et analysons votre posture naturelle.`;
    case 3:
      return `Nous vous faisons essayer un ou plusieurs de nos prototypes. Notre
      objectif est de nous assurer que nous avons bien compris vos
      attentes en termes de coupe et confort.`;
    default:
      return 'Unknown step';
  }
}

export default function LinearMeetingStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label} className={classes.steps}>
              <StepLabel className={classes.stepLabel}>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>
              3 à 4 semaines plus tard, nous nous retrouvons pour l’essayage
              final de votre commande et effectuer si besoin, un dernier petit
              ajustement.
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </ThemeProvider>
    </div>
  );
}
