import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import '../../App.css';
import background from '../../assets/background.png';
import { ReviewPage } from './components';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const Review = () => {
  const classes = useStyles();

  return (
    <div>
      <ReviewPage />
    </div>
  );
};

export default Review;
