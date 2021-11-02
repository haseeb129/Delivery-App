import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import '../../../../App.css';
import { StepperDataContext } from '../../../../contexts/StepperDataContext';
import cities from '../../../../pr.json';

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    fontSize: '3rem',
    color: '#101820FF',
    lineHeight: '50px',
    '@media (max-width:787px)': {
      fontSize: '1.5rem'
    }
  },
  subTitle: {
    fontSize: '19px',
    lineHeight: '75px',
    color: '#101820FF',
    '@media (max-width:787px)': {
      lineHeight: '30px'
    }
  },

  FooterTitle: {
    lineHeight: '130px',
    fontSize: '35px',
    color: '#101820FF',
    '@media (max-width:787px)': {
      fontSize: '1rem',
      lineHeight: '0px'
    }
  },

  movingFont: {
    fontSize: '20px'
  },
  Button: {
    width: '52vh',
    height: '7vh',
    fontSize: '20px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF',
      color: 'white'
    },
    // '@media (max-width:780px)':{
    //   width: '36vh',
    //   height:'6vh'
    // }
    '@media (max-width:480px)': {
      width: '90%'
    }
  },

  Autocomplete: {
    backgroundColor: 'white',
    width: '52vh',
    color: 'white',
    '@media (max-width:480px)': {
      width: '90%'
    }
  },
  ML: {
    paddingLeft: '13vh',
    '@media (max-width:780px)': {
      paddingLeft: '0vh'
    }
  },
  PT: {
    paddingTop: '2vh',
    textAlign: 'left',
    '@media (max-width:780px)': {
      textAlign: 'center'
    }
  },
  PLT: {
    paddingLeft: '13vh',
    paddingTop: '1vh',
    '@media (max-width:780px)': {
      paddingLeft: '0vh',
      paddingTop: '0'
    }
  },
  MuiGridGridSm6: {
    '@media (min-width: 600px)': {
      maxWidth: '100%'
    }
  },
  CommercialBTN: {
    paddingTop: '2vh',
    textAlign: 'left',
    '@media (max-width:780px)': {
      textAlign: 'center'
    }
  },
  DDTO: {
    width: '52vh',
    backgroundColor: '#fff',
    '@media (max-width:780px)': {
      margin: 'auto',
      width: '90%'
    }
  },
  MainLoader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#00000073',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '9999999'
  }
}));

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const pages1 = [
  {
    title: 'Residential',
    href: '/moreinfo'
  }
];
const pages2 = [
  {
    title: 'Commercial',
    href: '/contact'
  }
];
const pages3 = [
  {
    title: 'Next',
    href: '/'
  }
];

const Town = cities.map(city => city.city);

const BookNowPage = props => {

  const classes = useStyles();

  const [type, setType] = useState('commercial');
  const [from] = useState('');
  const [] = useState('');
  const [] = useState('');

  return (
    <StepperDataContext>
      {context => {
        return (
          <Grid container xs={12} align="center">
            {context.loader ? (
              <div className={classes.MainLoader}>
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : null}
            <Grid container xs={12} style={{ marginTop: '0vh' }}>
              <Grid item xs={0} sm={0} lg={3} />
              <Grid container xs={12} sm={8} lg={8}>
                <Grid item xs={12}>
                  <Typography className={classes.title}>
                    Book your Moving Today
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Know the cost of your Move and Reserve the Date with 25%
                    Deposit
                  </Typography>
                  <Grid container xs={12} className={classes.ML}>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={6}
                      style={{ paddingTop: '2vh' }}>
                      {pages1.map(page => (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          className={classes.MuiGridGridSm6}>
                          <Button
                            activeClassName={classes.active}
                            style={
                              type === 'residential'
                                ? {
                                    border: '2px solid #fff',
                                    boxShadow: 'inset 0px 0px 5px #fff'
                                  }
                                : { border: 'none' }
                            }
                            className={classes.Button}
                            key={page.title}
                            onClick={() => {
                              setType('residential');
                              // context.bookNowResidentialHandler(page.href, 'fromBookNow')
                            }}
                            variant="contained"
                            color="primary">
                            {page.title}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={6}
                      className={classes.CommercialBTN}>
                      {pages2.map(page => (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          className={classes.MuiGridGridSm6}>
                          <Button
                            activeClassName={classes.active}
                            className={classes.Button}
                            style={
                              type === 'commercial'
                                ? {
                                    border: '2px solid #fff',
                                    boxShadow: 'inset 0px 0px 5px #fff'
                                  }
                                : { border: 'none' }
                            }
                            key={page.title}
                            onClick={() => {
                              setType('commercial');
                            }}
                            variant="contained"
                            color="primary">
                            {page.title}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid container xs={12} className={classes.PLT}>
                    {type === 'commercial' && (
                      <>
                        <Grid item xs={12} sm={6} style={{ paddingTop: '2vh' }}>
                          <TextField
                            align="left"
                            name="customerName"
                            onChange={context.customerDetailsHandler}
                            className={classes.Autocomplete}
                            value={context.customerName}
                            required
                            label="Customer Name"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          className={classes.PT}
                          style={{ paddingTop: '2vh' }}>
                          <TextField
                            align="left"
                            name="customerEmail"
                            className={classes.DDTO}
                            onChange={context.customerDetailsHandler}
                            className={classes.Autocomplete}
                            value={context.customerEmail}
                            required
                            label="Customer Email"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} style={{ paddingTop: '2vh' }}>
                          <TextField
                            align="left"
                            name="customerBussinessName"
                            className={classes.DDTO}
                            onChange={context.customerDetailsHandler}
                            className={classes.Autocomplete}
                            value={context.customerBussinessName}
                            required
                            label="Business Name"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          className={classes.PT}
                          style={{ paddingTop: '2vh' }}>
                          <TextField
                            align="left"
                            name="customerBusinessPhone"
                            className={classes.DDTO}
                            onChange={context.customerDetailsHandler}
                            className={classes.Autocomplete}
                            value={context.customerBusinessPhone}
                            required
                            label="Customer Phone"
                            variant="outlined"
                          />
                        </Grid>
                      </>
                    )}
                    <Grid item xs={12} sm={6} style={{ paddingTop: '2vh' }}>
                      <Autocomplete
                        className={classes.Autocomplete}
                        inputStyle={{ color: 'white' }}
                        InputProps={{
                          className: classes.inputColor
                        }}
                        align="left"
                        id="combo-box-demo"
                        options={Town}
                        defaultValue={context.from}
                        onChange={(e, value) =>
                          context.reserveChangeHandlerFrom(value)
                        }
                        renderInput={params => (
                          <TextField
                            value={from}
                            required
                            InputProps={{
                              classes: {
                                input: classes.resize,
                                root: classes.label,
                                focused: classes.focusedLabel,
                                error: classes.erroredLabel
                              }
                            }}
                            {...params}
                            label="From"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.PT}>
                      <Autocomplete
                        className={classes.Autocomplete}
                        inputStyle={{ color: 'white' }}
                        InputProps={{
                          className: classes.inputColor
                        }}
                        id="combo-box-demo"
                        options={Town}
                        className={classes.DDTO}
                        defaultValue={context.to}
                        onChange={(e, v) => context.reserveChangeHandlerTo(v)}
                        renderInput={params => (
                          <TextField
                            required
                            InputProps={{
                              classes: {
                                input: classes.resize,
                                root: classes.label,
                                focused: classes.focusedLabel,
                                error: classes.erroredLabel
                              }
                            }}
                            {...params}
                            label="To"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                  <Grid container xs={12} className={classes.PLT}>
                    <Grid item xs={12} sm={6} style={{ paddingTop: '2vh' }}>
                      <TextField
                        required
                        className={classes.Autocomplete}
                        inputStyle={{ color: 'white' }}
                        align="left"
                        InputProps={{
                          className: classes.inputColor
                        }}
                        id="datetime-local"
                        label="Next appointment"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                          shrink: true
                        }}
                        name="date"
                        onChange={(e) => context.reserveChangeHandlerDate(e.target.value)}
                        value={context.date}
                        variant="outlined"
                        label="Time of the Move"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.PT}>
                      {type === 'commercial'
                        ? pages3.map(page => (
                            <Grid item xs={12}>
                              <Button
                                disabled={
                                  context.customerEmail === '' ||
                                  !validateEmail(context.customerEmail) ||
                                  context.from === '' ||
                                  context.to === '' ||
                                  context.date === ''
                                }
                                activeClassName={classes.active}
                                className={classes.Button}
                                key={page.title}
                                onClick={() =>
                                  context.submitContactHandler('booknow')
                                }
                                variant="contained"
                                color="primary">
                                {page.title}
                              </Button>
                            </Grid>
                          ))
                        : pages3.map(page => (
                            <Grid item xs={12}>
                              <Button
                                disabled={
                                  context.from === '' ||
                                  context.to === '' ||
                                  context.date === ''
                                }
                                activeClassName={classes.active}
                                className={classes.Button}
                                key={page.title}
                                onClick={() => {
                                  context.handleNextEvent(
                                    'fromBookNow',
                                    page.href
                                  );
                                }}
                                variant="contained"
                                color="primary">
                                {page.title}
                              </Button>
                            </Grid>
                          ))}
                    </Grid>
                  </Grid>
                  {/* <Grid item xs={12} style={{ paddingTop: '2vh' }}>
                    <Typography className={classes.FooterTitle}>
                      Questions? Call us Now! 787-955-8832
                    </Typography>
                    <Widget
                      launcherCloseLabel="Chat with us"
                      title="Welcome"
                      subtitle="Ask us anything"
                    />
                  </Grid> */}
                </Grid>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Grid>
        );
      }}
    </StepperDataContext>
  );
};
BookNowPage.propTypes = {
  className: PropTypes.string
};

export default BookNowPage;
