import React, { forwardRef, useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import { StepperDataContext } from '../../../../contexts/StepperDataContext';
import '../../../../App.css';
import ErrorModal from '../../../../layouts/ErrorModal/index';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    fontSize: '3rem',
    color: '#101820FF',
    lineHeight: '40px',
    marginLeft: '5vh',
    '@media (max-width:780px)': {
      fontSize: '1.2rem',
      // marginLeft: '0',
      lineHeight: '30px',
      width: '80%',
      textAlign: 'center',
      margin: '0 1rem'
    }
  },
  subTitle: {
    fontSize: '29px',
    fontWeight: '400',
    lineHeight: '30px',

    color: '#101820FF',
    '@media (max-width:780px)': {
      fontSize: '1.2rem',
      margin: '0 1rem'
    }
  },

  FooterTitle: {
    fontSize: '35px',
    color: '#101820FF'
  },
  Button: {
    width: '15vh',
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
    width: '38vh',
    marginTop: '.8vh',
    height: '7vh',
    fontSize: '20px',
    color: '#101820FF',
    borderRadius: '25px',
    background: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: '#101820FF'
    },
    '@media (max-width:800px) and (min-width:700px)': {
      width: '16vh',
      height: '3.5vh'
    },
    '@media (max-width:600px)': {
      width: '37vh',
      height: '5.5vh'
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
  MT: {
    marginTop: '6vh',
    '@media (max-width:780px)': {
      marginTop: '2vh'
    }
  },
  MB: {
    '@media (max-width:780px)': {
      marginBottom: '2vh'
    }
  },
  ML: {
    marginLeft: '8vh',
    '@media (max-width:780px)': {
      marginLeft: '0vh'
    }
  },
  MainContainer: {
    marginTop: '5vh',
    '@media (max-width:780px)': {
      marginTop: '1vh'
    }
  },
  MainFormContainer: {
    marginTop: '9vh',
    '@media (max-width:780px)': {
      marginTop: '2vh'
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

const pages = [
  {
    title: 'Next',
    href: '/thankyou'
  }
];

const ReservePage = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <StepperDataContext>
      {context => {
        return (
          <Grid
            container
            xs={12}
            align="center"
            className={classes.MainContainer}
            style={{}}>
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
            <Grid container xs={12}>
              <Grid item xs={12}>
                <Typography className={classes.title}>
                  Full Concierge Service to Commercial Customers
                </Typography>
              </Grid>
              <Grid container xs={12} style={{ marginTop: '4vh' }}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    We want to find the best price for you... Let's Talk
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                sm={12}
                lg={12}
                className={classes.MainFormContainer}
                style={{}}>
                <Grid item xs={0} sm={4} lg={4} />
                <Grid container xs={12} sm={8} justify="space-evenly">
                  <Grid item xs={12} sm={6} lg={4} className={classes.MB}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off">
                      <TextField
                        required
                        value={context.contactName}
                        name="contactName"
                        onChange={e =>
                          context.contactDetailsHandler(
                            e.target.name,
                            e.target.value
                          )
                        }
                        id="outlined-basic"
                        label="Contact Name"
                        variant="outlined"
                        align="left"
                        style={{ width: 250, backgroundColor: '#fff' }}
                      />
                    </form>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off">
                      <TextField
                        required
                        value={context.contactEmail}
                        name="contactEmail"
                        onChange={e =>
                          context.contactDetailsHandler(
                            e.target.name,
                            e.target.value
                          )
                        }
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        align="left"
                        style={{ width: 250, backgroundColor: '#fff' }}
                      />
                    </form>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                className={classes.MB}
                className={classes.MT}>
                <Grid item xs={0} sm={4} lg={4} />
                <Grid container xs={12} sm={8} justify="space-evenly">
                  <Grid item xs={12} sm={6} lg={4} className={classes.MB}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off">
                      <TextField
                        required
                        value={context.contactBusinessName}
                        name="contactBusinessName"
                        onChange={e =>
                          context.contactDetailsHandler(
                            e.target.name,
                            e.target.value
                          )
                        }
                        id="outlined-basic"
                        label="Business Name"
                        variant="outlined"
                        align="left"
                        style={{ width: 250, backgroundColor: '#fff' }}
                      />
                    </form>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                      style={{ width: 250, margin: '0 40px' }}
                      required
                      className={classes.Autocomplete}
                      id="datetime-local"
                      label="Next appointment"
                      type="datetime-local"
                      defaultValue={new Date()}
                      InputLabelProps={{
                        shrink: true
                      }}
                      name="contactDate"
                      onChange={(e, v) => {
                        console.log(e.target.value, v);
                        context.contactDetailsHandler('contactDate',e.target.value);
                      }}
                      value={context.contactDate}
                      variant="outlined"
                      label="Time to Contact you"
                    />

                    {/* </form> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                className={classes.MB}
                className={classes.MT}>
                <Grid item xs={0} sm={4} lg={4} />
                <Grid container xs={12} sm={8} justify="space-evenly">
                  <Grid item xs={12} sm={6} lg={4} className={classes.MB}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off">
                      <TextField
                        required
                        value={context.contactPhone}
                        name="contactPhone"
                        onChange={e =>
                          context.contactDetailsHandler(
                            e.target.name,
                            e.target.value
                          )
                        }
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        align="left"
                        style={{ width: 250, backgroundColor: '#fff' }}
                      />
                    </form>
                  </Grid>
                  <Grid container xs={12} sm={6} lg={4} style={{}}>
                    {pages.map(page => (
                      <Grid item xs={12} sm={4} className={classes.ML}>
                        <Button
                          disabled={
                            context.contactName === '' ||
                            context.contactEmail === '' ||
                            !validateEmail(context.contactEmail) ||
                            context.contactBusinessName === '' ||
                            context.contactDate == '' ||
                            context.contactPhone === ''
                          }
                          activeClassName={classes.active}
                          className={classes.Button}
                          key={page.title}
                          onClick={context.submitContactHandler}
                          variant="contained"
                          color="primary">
                          {page.title}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {context.errorMsg ? <ErrorModal msg={context.errorMsg} /> : null}
          </Grid>
        );
      }}
    </StepperDataContext>
  );
};
ReservePage.propTypes = {
  className: PropTypes.string
};

export default ReservePage;
