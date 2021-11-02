import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import "../../App.css";
import background from "../../assets/background.png"
import {
   ReservePage  
} from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    },

}));

const Reserve = () => {
  const classes = useStyles();

  return (
    <div>
        <ReservePage/>
    </div>
  );
};

export default Reserve;
