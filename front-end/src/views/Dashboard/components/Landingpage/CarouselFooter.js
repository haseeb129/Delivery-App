import React from 'react';
import { Typography, Link } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import 'antd/dist/antd.css';
import { makeStyles } from '@material-ui/styles';

import { Carousel } from 'antd';
const useStyles = makeStyles(theme => ({
  root: {},
  Carousel: {
    fontWeight: '600',
    zIndex: '100',
    '& div': {
      height: '100%'
    }
  },
  Page1: {
    fontSize: '30px',
    color: 'black',
    lineHeight: '1',
    '@media(max-width:768px)': {
      fontSize: '22px'
    }
  },
  Same: {
    fontWeight: '500',
    color: 'black !important',
    fontSize: '18px',
    marginTop: '-4vh',
    lineHeight: '1.5'
  },
  Same1: {
    fontWeight: '500',
    fontSize: '18px',
    color: 'black !important',
    lineHeight: '32px',
    // marginTop: '-12px',
    marginTop: '5vh',
    '@media(max-width:768px)': {
      marginTop: '0vh !important'
    }
  },
  Different: {
    color: 'black !important',
    fontSize: '35px',
    marginTop: '1vh',
    lineHeight: '30px',
    '@media(max-width:768px)': {
      fontSize: '22px'
    }
  },
  CRS: {
    height: '100%',
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
    '@media(max-width:768px)': {
      '& h2': {
        display: 'flex',
        fontSize: '22px',
        width: '8rem',
        height: '8rem',
        margin: 'auto',
        background: '#3BB5FB',
        // color: '#f2e161 !important',
        color: '#fff !important',
        fontWeight: 'bold !important',
        padding: '1rem',
        textAlign: 'center',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    '@media(max-width:400px)': {
      '& h2': {
        fontSize: '14px',
        width: '6rem',
        height: '6rem'
      }
    }
  }
}));
const CarouselFooter = () => {
  const classes = useStyles();
  return (
    <Carousel autoplay dots={false} className={classes.Carousel} style={{}}>
      {/* <div className={classes.CRS}>
        <Typography>
          <h2 style={{ fontWeight: '500', color: 'black' }}>
            "Only A+ Moving Companies"
          </h2>
        </Typography>
      </div> */}
      <div className={classes.CRS}>
        <Typography>
          <h2 style={{ fontWeight: '500', color: 'black' }}>
            "Tell us about your moves"
          </h2>
        </Typography>
      </div>
      <div className={classes.CRS}>
        <Typography>
          <h2 style={{ fontWeight: '500', color: 'black' }}>
            Select all the items of your move
          </h2>
        </Typography>
      </div>
      <div className={classes.CRS}>
        <Typography>
          <h2 style={{ fontWeight: '500', color: 'black' }}>
            Get an instant quote
          </h2>
        </Typography>
      </div>
    </Carousel>
  );
};
export default CarouselFooter;
