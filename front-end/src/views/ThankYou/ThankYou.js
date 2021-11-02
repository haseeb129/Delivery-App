import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import "../../App.css";
import background from "../../assets/background.png"
import {
   ThankYouPage  
} from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    }
}));

const ThankYou = () => {
  const classes = useStyles();

  return (
    <div>
        <ThankYouPage/>
    </div>
  );
};

export default ThankYou;
