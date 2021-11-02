import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import "../../App.css";
import background from "../../assets/background.png"
import {
   ContactPage  
} from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div>
        <ContactPage/>
    
    
    </div>
  );
};

export default Contact;
