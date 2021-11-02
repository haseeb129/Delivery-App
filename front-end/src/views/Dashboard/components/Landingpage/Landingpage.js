import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import 'antd/dist/antd.css';

import CarouselFooter from './CarouselFooter';
import { NavLink as RouterLink } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';
import '../../../../App.css';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: '3.7rem',
    color: '#101820FF',
    '@media (max-width:787px)': {
      fontSize: '1.5rem',
      lineHeight: '1rem'
    }
  },
  subTitle: {
    fontSize: '1.6rem',
    lineHeight: '30px',
    color: '#101820FF',
    '@media (max-width:787px)': {
      fontSize: '1rem'
    }
  },
  resize: {
    fontSize: 50
  },
  movingFont: {
    fontSize: '20px'
  },
  Button: {
    width: '35vh',
    height: '7vh',
    fontSize: '20px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF',
      color: 'white'
    },
    '@media (max-width:1000px)': {
      margin: '10px 0px',
      width: '25vh',
      fontSize: '18px'
    },

    '@media (max-width:1000px)': {
      margin: '10px 0px',
      fontSize: '14px'
    }
  },

  blueBorder: {
    paddingTop: '3vh',
    marginTop: '10vh',
    height: '30vh',
    borderRadius: '20px',

    color: 'white',
    paddingLeft: '4vh'
  },
  Autocomplete: {
    backgroundColor: 'white',
    color: 'white'
  },
  MainContentWrapper: {
    marginTop: '10vh',

    '@media (max-width:1000px)': {
      marginTop: '3vh'
    }
  },
  carouselFooterWrapper: {
    // top: '59vh',
    display: 'none',
    height: '25vh',
    bottom: 0,
    marginLeft: '-10vh',
    position: 'absolute',
    '@media (max-width:600px)': {
      display: 'block',
      bottom: '0',
      marginLeft: '0',
      height: 'auto',
      position: 'relative'
    }
  },
  CFWD: {
    '@media screen and (min-width: 767px)': {
      display: 'none'
    }
  },
  carouselFooter: {
    // marginTop: '20vh',
    textAlign: 'right',
    '@media (max-width:600px)': {
      marginTop: '0'
    }
  },
  FoooterCarousel: {
    opacity: '.5',
    background: 'silver',
    top: '6.5vh',
    position: 'absolute',
    zIndex: '0',
    width: '100%',
    height: '25vh',
    '@media (max-width:786px)': {
      opacity: '0',
      display: 'none'
    },
    '@media (min-width:786px)': {
      display: 'none'
    }
  },
  CarouselContainer: {},
  Question: {
    padding: '1rem 0',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    '@media (max-width:600px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: 'auto'
    }
  },
  pQuestion: {
    color: 'rgb(25, 34, 31)',
    fontSize: '20px',
    fontWeight: 'bold',
    '& a': {
      color: 'rgb(25, 34, 31)',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    '@media (max-width:600px)': {
      fontSize: '16px',
      lineHeight: '14px',
      margin: '0 4vh',
      marginBottom: '1vh'
    }
  },
  PhoneIcon: {
    display: 'inline-block',
    background: '#3bb5fb',
    // color: '#f2e161',
    color: '#fff',
    padding: '.2rem',
    borderRadius: '50%'
  },
  DashboardMainButton: {
    marginTop: '10vh',
    '@media (max-width:600px)': {
      marginTop: '1vh'
    }
  },
  DashboardMainButtonBookNow: {
    marginTop: '6vh',
    '@media (max-width:600px)': {
      marginTop: '1vh'
    }
  },
  SubWrapper: {
    marginTop: '4vh',
    '@media (max-width:600px)': {
      marginTop: '1vh'
    }
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));
const pages = [
  {
    title: 'Residential',
    href: '/reserve'
  },
  {
    title: 'Commercial',
    href: '/reserve'
  }
];


const Landingpage = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <Grid
      container
      xs={12}
      class="background"
      align="center"
      class={classes.MainContentWrapper}>
      <Grid item xs={12}>
        <Typography className={classes.title}>
          Know the cost of your move
        </Typography>
        <Grid item xs={12} className={classes.SubWrapper} style={{}}>
          <Typography className={classes.subTitle}>
            Islandwide Coverage
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          className={classes.DashboardMainButton}
          style={{}}>
          <Grid item xs={12} sm={3} style={{ marginLeft: '5vh' }} />
          <Grid container xs={12} sm={5} align="center" justify="space-around">
            {pages.map(page => (
              <Grid item xs={12} sm={6}>
                <Button
                  activeClassName={classes.active}
                  className={classes.Button}
                  key={page.title}
                  component={CustomRouterLink}
                  // to={page.href}
                  to={{ pathname: page.href, state: { fromLink: page.title } }}
                  variant="contained"
                  color="primary">
                  {page.title}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={3} />
        </Grid>
        <Grid
          container
          xs={12}
          className={classes.DashboardMainButtonBookNow}
          style={{}}>
          <Grid item xs={12}>
            <Typography className={classes.subTitle}>
              Book your move today
            </Typography>
            <div style={{ marginTop: '2vh' }}>
              <Button
                activeClassName={classes.active}
                className={classes.Button}
                component={CustomRouterLink}
                // to={page.href}
                to="/booknow"
                variant="contained"
                color="primary">
                Book Now
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ marginTop: '5vh' }}>
          <Grid item xs={12} style={{ zIndex: '40' }}></Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} className={classes.carouselFooterWrapper}>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={10} className={classes.carouselFooter}>
          <div className={classes.CFWD}>
            <CarouselFooter />
          </div>
          {/* <div className={classes.Question}>
            <Typography className={classes.pQuestion}>
              <span className={classes.PhoneIcon}>
                <PhoneIcon />
              </span>{' '}
              <a href="tel:+17879558832">Questions? Call us at 787-955-8832</a>
            </Typography>
          </div> */}
          {/* <Widget
            launcherCloseLabel="Chat with us"
            title="Welcome"
            subtitle="Ask us anything"
          /> */}
        </Grid>
        <Grid item xs={12} sm={1} />
      </Grid>
      {/* <Grid
        container
        xs={12}
        className={classes.CarouselContainer}
        style={{ position: 'absolute', bottom: '31vh' }}>
        <div style={{}} className={classes.FoooterCarousel} />
      </Grid> */}
    </Grid>
  );
};
Landingpage.propTypes = {
  className: PropTypes.string
};

export default Landingpage;
