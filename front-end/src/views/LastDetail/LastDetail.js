import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import '../../App.css';
import background from '../../assets/background.png';
import { LastDetailPage } from './components';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const LastDetail = () => {
  const classes = useStyles();

  return (
    <div>
      <LastDetailPage />
    </div>
  );
};

export default LastDetail;
