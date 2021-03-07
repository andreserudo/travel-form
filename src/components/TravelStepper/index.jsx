import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Confirmation, Payment, Success, TravelDetails, UserDetails,
} from '..';
import { WrapperPage } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  section: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

function getSteps() {
  return [
    'Dados da Viagem',
    'Pagamento',
    'Seus dados',
    'Confirmação',
    'Seu recibo',
  ];
}

export default function TravelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
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

  const showContent = (step) => {
    switch (step) {
      case 0:
        return <TravelDetails />;
      case 1:
        return <Payment />;
      case 2:
        return <UserDetails />;
      case 3:
        return <Confirmation />;
      case 4:
        return <Success />;
      default:
        return 'Unknown stepIndex';
    }
  };

  return (
    <WrapperPage>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <main>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Nova Viagem</Button>
          </div>
        ) : (
          <section>
            { showContent(activeStep) }
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Voltar
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
              </Button>
            </div>
          </section>
        )}
      </main>
    </WrapperPage>

  );
}
