import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import "../../App.css";
import background from "../../assets/background.png"
import {
   BookNowPage  
} from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    }
}));

const BookNow = () => {
  const classes = useStyles();

  return (
    <div>
        <BookNowPage/>
    
    
    </div>
  );
};

export default BookNow;
