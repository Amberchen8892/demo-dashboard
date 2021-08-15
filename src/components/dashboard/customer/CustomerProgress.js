import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

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
}));

function getSteps() {
  return ['Created', 'In Process', 'Return', 'Completed'];
}

export default function HorizontalLabelPositionBelowStepper({ customer }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleActiveStep = () => {
    if (customer.status === 'Work in Progress') {
      setActiveStep(1);
    } else if (customer.status === 'Return to Lead Source') {
      setActiveStep(2);
    } else if (customer.status === 'Completed') {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  useEffect(() => {
    handleActiveStep();
  }, [handleActiveStep, setActiveStep]);

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
