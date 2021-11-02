import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import '../../App.css';
import background from '../../assets/background.png';
import { Landingpage } from './components';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Landingpage />
    </div>
  );
};

export default Dashboard;
