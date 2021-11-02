import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import {StepLabel,Grid }from '@material-ui/core';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
return ([<Grid item xs={4}><Typography style={{background:"#F5F5F5"}}><span>Accepted</span><br></br><span >22 Nov. 11:56AM</span></Typography></Grid>, <Grid item xs={4}><Typography style={{background:"#F5F5F5"}}><span>New Order Created</span><br></br><span >22 Nov. 11:56AM</span></Typography></Grid>]);
}


export default function CustomizedStepper() {
  const classes = useStyles();
  const steps = getSteps();



  return (
      <Grid item xs={12} >
    <div className={classes.root}>
      <Stepper  orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel style={{backgroundColor:"F5F5F5F5"}}>{label}</StepLabel>
            <StepContent>
             
              
            </StepContent>
          </Step>
        ))}
      </Stepper>
   
    </div>
    </Grid>
  );
}
