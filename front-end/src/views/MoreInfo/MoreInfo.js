import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import "../../App.css";
import background from "../../assets/background.png"
import {
  MoreInfoPage  
} from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    }
}));

const MoreInfo = () => {
  const classes = useStyles();

  return (
    <div>
        <MoreInfoPage/>
    
    
    </div>
  );
};

export default MoreInfo;
