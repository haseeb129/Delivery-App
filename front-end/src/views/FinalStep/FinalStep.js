import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import '../../App.css';
import { FinalStepPage } from './components';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const FinalStep = () => {
  const classes = useStyles();

  return (
    <div>
      <FinalStepPage />
    </div>
  );
};

export default FinalStep;
