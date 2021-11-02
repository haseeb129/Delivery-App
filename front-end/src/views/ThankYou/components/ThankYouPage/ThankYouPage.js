import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { NavLink as RouterLink } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';
import '../../../../App.css';
import PhoneIcon from '@material-ui/icons/Phone';
import thankyou from '../../../../assets/thankyou-bg-mobile.png';

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    fontSize: '3rem',
    lineHeight: '50px',
    color: '#101820FF',
    '@media (max-width:787px)': {
      fontSize: '1.5rem',
      lineHeight: '30px'
    }
  },
  subTitle: {
    fontSize: '30px',
    color: '#101820FF',
    '@media (max-width:787px)': {
      fontSize: '20px'
    }
  },

  FooterTitle: {
    fontSize: '35px',
    color: '#101820FF'
  },
  Button: {
    width: '35vh',
    height: '7vh',
    fontSize: '20px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF'
    }
  },
  resize: {
    color: 'white'
  },
  inputColor: {
    color: 'white',
    fontWeight: 'bold'
  },
  movingFont: {
    fontSize: '20px'
  },
  Button: {
    width: '43vh',
    height: '7vh',
    fontSize: '20px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF'
    }
  },
  ThankYou: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '80px',
    '@media (max-width:787px)': {
      fontSize: '50px'
    }
  },

  Autocomplete: {
    backgroundColor: 'white',

    color: 'white'
  },
  label: {
    '&$focusedLabel': {
      color: 'cyan'
    },
    '&$erroredLabel': {
      color: 'orange'
    }
  },
  focusedLabel: {},
  erroredLabel: {},
  underline: {
    '&$error:after': {
      borderBottomColor: 'orange'
    },
    '&:after': {
      borderBottom: `2px solid cyan`
    }
  },
  MainContainer: {
    marginTop: '8vh',
    '@media (max-width:787px)': {
      marginTop: '3vh'
    }
  },
  ThankYouImg: {
    marginTop: '7vh',
    '@media (max-width:787px)': {
      marginTop: '3vh'
    }
  },
  SubCont: {
    marginTop: '6vh',
    '@media (max-width:787px)': {
      marginTop: '3vh'
    }
  },
  question2: {
    display: 'none',
    '@media (max-width:787px)': {
      display: 'block'
    }
  },
  pQuestion: {
    color: 'rgb(25, 34, 31)',
    fontSize: '24px',
    fontWeight: 'bold',
    '& a': {
      color: 'rgb(25, 34, 31)',
      fontSize: '26px',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    '@media (max-width:600px)': {
      fontSize: '20px',
      lineHeight: '14px',
      margin: '2rem',
      marginLeft: '0.5rem',
      marginBottom: '1vh',
      bottom: '65px',
      '& a': {
        color: 'rgb(25, 34, 31)',
        fontSize: '16px',
        margin: '0rem',
        '&:hover': {
          textDecoration: 'none'
        }
      }
    }
  },
  PhoneIcon: {
    display: 'inline-block',
    background: '#3bb5fb',
    // color: '#f2e161',
    color: '#fff',
    padding: '.2rem',
    borderRadius: '50%',
    '& svg': {
      fontSize: '2.5rem'
    },
    '@media(max-width: 787px)': {
      '& svg': {
        fontSize: '1.5rem'
      }
    }
  }
}));


const ThankYouPage = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <Grid
      container
      xs={12}
      align="center"
      className={classes.MainContainer}
      style={{}}>
      <Grid container xs={12}>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography className={classes.title}>
              We have received your Information
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} className={classes.SubCont} style={{}}>
          <Grid item xs={12}>
            <Typography className={classes.subTitle}>
              Now one of our representatives will contact you
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} className={classes.ThankYouImg} style={{}}>
          <Grid item xs={12} className={classes.ThankYou}>
            <div>Thank you!</div>
            <div className={[classes.question2, classes.ImgContainer].join('')}>
              <img src={thankyou} alt="thank you" />
            </div>
          </Grid>
        </Grid>

        <div className={classes.question2}>
          <div className={classes.Question}>
            <Typography className={classes.pQuestion}>
              <span className={classes.PhoneIcon}>
                <PhoneIcon />
              </span>{' '}
              <a href="+17879558832">Questions? Call us at 787-955-8832</a>
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
ThankYouPage.propTypes = {
  className: PropTypes.string
};

export default ThankYouPage;
