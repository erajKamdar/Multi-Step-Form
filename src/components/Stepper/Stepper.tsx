import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FirstForm from "../FirstForm/FirstForm";
import SecondForm from "../SecondForm/SecondForm";
import ThirdForm from "../ThirdForm/ThirdForm";
import { useStyles } from "./style";

function getSteps() {
  return ["Personal Details", "Loan Details", "Account Details"];
}

function getStepContent(stepIndex: number, handleNext: () => void) {
  switch (stepIndex) {
    case 0:
      return <FirstForm handleNext={handleNext} />;
    case 1:
      return <SecondForm handleNext={handleNext} />;
    case 2:
      return <ThirdForm handleNext={handleNext} />;
    default:
      return "Oh Snap! Step not found!";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel><span style={{color: "cadetblue"}}>{label}</span></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <h1 style={{marginTop: "40px", textAlign:"center", color: "cadetblue" }}>Resquested For A Loan Now!</h1>
        {activeStep === steps.length ? (
          <div style={{ marginTop: "30px", textAlign:"center" }}>
            <Typography variant="h6" className={classes.instructions}>
              Your Request Of Loan has Been Approved!
            </Typography>
            <Button onClick={handleReset} size="large" color="default" variant="outlined" type="submit" 
        style={{marginTop: "20px",
        marginBottom: "20px", backgroundColor: "cadetblue", color: "white",
        }} >
              Want To Resquest New
            </Button>
          </div>
        ) : (
          <div>{getStepContent(activeStep, handleNext)}</div>
        )}
      </div>
    </div>
  );
}