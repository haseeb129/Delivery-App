import React, { forwardRef, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { NavLink as RouterLink, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import '../../../../App.css';
import { StepperDataContext } from '../../../../contexts/StepperDataContext'
import cities from '../../../../pr.json';
import ErrorModal from '../../../../layouts/ErrorModal/index';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    fontSize: '3rem',
    color: '#101820FF',
    lineHeight: '40px',
    '@media (max-width:787px)':{
      fontSize:'1.5rem'
    }
  },
  subTitle: {
    fontSize: '16px',

    color: '#101820FF'
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
      backgroundColor: '#101820FF',
      color: 'white'
    }
  },

  Autocomplete: {
    backgroundColor: 'white',
    color: 'white',

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
  MT1:{
    marginTop : '3vh',
    '@media (max-width:1280px)': {
      marginTop : '1vh',
      marginBottom: '3vh'
    },
  },
  MT2:{
    marginTop : '2.4vh',
    '@media (max-width:1280px)': {
      marginTop : '1vh',
      marginBottom: '3vh'
    },
  },
  MT3:{
    marginTop : '2vh',
    '@media (max-width:1280px)': {
      marginTop : '1vh',
      marginBottom: '3vh'
    },
  },
  btnWrapper:{ 
    marginTop: '15vh',
    '@media (max-width:1280px)': {
      marginTop: '3vh',
    },
  }
  ,FormWrapper:{
    paddingTop: '8vh', 
    '@media(max-width:787px)':{
      paddingTop:'2vh'
    }
  },
  MainLoader:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#00000073',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:'9999999'
  },
  MBS:{
    '@media(max-width:787px)':{
      paddingBottom:'5vh'
    }
  },
  PLT:{
    padding:'0 2vh',
    '@media(max-width:787px)':{
      padding:'0vh'
    }
  },
  DateTimePicker:{
    width:'100%',
    '@media(max-width:787px)':{
      width:'300px',
    }
  }
}));

const pages = [
  {
    title: 'Next',
    href: '/contact'
  }
];

const ReservePage = props => {
  const { className } = props;
  const moreInfoLink = props.location?.state?.fromLink === 'Residential';
  const classes = useStyles();

  


return(
  <StepperDataContext.Consumer>{(context) => {
    return (
      <Grid container xs={12} align="center" style={{ marginTop: '2vh' }}>
     {context.loader ?  <div className={classes.MainLoader}>
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
      </div> : null}
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography className={classes.title}>
              Tell us more about your move
            </Typography>
          </Grid>
         {moreInfoLink ? (
            <Grid
            container
            xs={12}
            // align="center"
            justify="space-evenly"
            className={classes.FormWrapper}
            style={{ }}>
              {/* <Grid className={classes.MBS} container xs={12} sm={12} lg={3}>
                <Grid item xs={12} style={{ height: '50px' }}>
                <TextField
                align="left"
                name="customerName"
                style={{ width: 300 }}
                onChange={context.customerDetailsHandler}
                className={classes.Autocomplete}
                    value={context.customerName}
                    required
                      label="Name"
                      variant="outlined"
                    />
                </Grid>
              </Grid>

              <Grid className={classes.MBS} container xs={12} sm={12} lg={3}>
                <Grid item xs={12} style={{ height: '50px' }}>
                <TextField
                align="left"
                style={{ width: 300 }}
                name="customerEmail"
                onChange={context.customerDetailsHandler}
                className={classes.Autocomplete}
                    value={context.customerEmail}
                    required
                      label="Email"
                      variant="outlined"
                    />
                </Grid>
              </Grid>
              <Grid className={classes.MBS} container xs={12} sm={12} lg={3}>
                <Grid item xs={12} style={{ height: '50px' }}>
                      <TextField   
                      // {...inputProps} 
                      style={{ width: 300 }} 
                      className={classes.Autocomplete} 
                      align="left"
                      type="text" 
                      value={context.customerPhoneFormated} 
                      onChange={(e) => context.customerPhoneHandler(e.target.value)}
                      required
                      label="Phone"
                      variant="outlined" />
                </Grid>
              </Grid> */}
              
            </Grid>
         ) : null}
         
          <Grid
            container
            xs={12}
            align="center"
            justify="space-evenly"
            className={classes.FormWrapper}
            style={{ }}>
            <Grid container xs={12} sm={12} lg={3}>
              <Grid item xs={12} style={{ height: '50px' }}>
                <Autocomplete
                  className={classes.Autocomplete}
                  inputStyle={{ color: 'white' }}
                  align="left"
                  InputProps={{
                    className: classes.inputColor
                  }}
                  id="combo-box-demo"
                  options={context.cities.map(city=>city.name)}
                  style={{ width: 300 }}
                  openOnFocus={true}
                  defaultValue={context.from}
                  onChange={(e,value) => context.reserveChangeHandlerFrom(value)}
                  renderInput={params => (
                    <TextField
                    value={context.from}
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
              <Grid item xs={12} sm={12} className={classes.MT1}>
                <Typography className={classes.subTitle}>
                  Select the Town you are moving from
                </Typography>
              </Grid>
            </Grid>
            <Grid contain er xs={12} sm={12} lg={3}>
              <Grid item xs={12}>
                
                <Autocomplete
                  className={classes.Autocomplete}
                  inputStyle={{ color: 'white' }}
                  align="left"
                  InputProps={{
                    className: classes.inputColor
                  }}
                  id="combo-box-demo"
                  options={context.cities.map(city=>city.name)}
                  style={{ width: 300 }}
                  defaultValue={context.to}
                  onChange={(e,v) => context.reserveChangeHandlerTo(v)}
                  renderInput={params => (
                    <TextField
                    value={context.to}
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
              <Grid item xs={12} className={classes.MT2}>
                <Typography className={classes.subTitle}>
                  Select the Town you are moving to
                </Typography>
              </Grid>
            </Grid>
            <Grid container xs={12} sm={12} lg={3}>
              <Grid item xs={12}>
                {/* <Autocomplete
                  className={classes.Autocomplete}
                  inputStyle={{ color: 'white' }}
                  align="left"
                  InputProps={{
                    className: classes.inputColor
                  }}
                  id="combo-box-demo"
                  options={SelectDateAndTime}
                  style={{ width: 300 }}
                  defaultValue={context.date}
                  onChange={(e,v) => context.reserveChangeHandlerDate(v)}
                  renderInput={params => (
                    <TextField
                    value={context.data}
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
                      label="Date and Hour"
                      variant="outlined"
                    />
                  )}
                /> */}
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container>

                <Grid className={classes.PLT}  item xs={12} sm={12} lg={6}>
                <KeyboardDatePicker
                 className={[classes.Autocomplete, classes.DateTimePicker].join(' ')}
                 inputStyle={{ color: 'white' , padding:'0 2vh' }}
                 style={{ }}
                //  className={classes.DateTimePicker}
                  disableToolbar
                  align="left"
                  variant="outlined"
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={context.date}
                  onChange={context.customerDateHandler}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={6}>
                  <KeyboardTimePicker
                   className={[classes.Autocomplete, classes.DateTimePicker].join(' ')}
                   inputStyle={{ color: 'white' , padding:'0 2vh' }}
                   align="left"
                  //  className={classes.DateTimePicker}
                   style={{  }}
                   inputVariant="outlined"
                    margin="normal"
                    id="time-picker"
                    label="Time"
                    value={context.time}
                    onChange={context.customerTimeHandler}
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                  />
                    </Grid>
                    </Grid>
                </MuiPickersUtilsProvider>

              </Grid>
              <Grid item xs={12} className={classes.MT3}>
                <Typography className={classes.subTitle}>
                  Select the Date and Time of your Move
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            align="center"
            justify="center"
            className={classes.btnWrapper}
            >
            <Grid item xs={0} sm={0} lg={3} />
            <Grid item xs={0} sm={0} lg={4} style={{ marginLeft: '8vh' }} />
            <Grid container xs={12} lg={3}>
              {pages.map(page => (
                <Grid item xs={12}>
                  <Button
                  disabled={context.to === '' || context.from === '' || context.date === ''}
                    activeClassName={classes.active}
                    className={classes.Button}
                    key={page.title}
                    // component={CustomRouterLink}
                    // to={ moreInfoLink ? {pathname:'moreinfo',state:{fromLink:'Residential'}}:page.href}
                    onClick={() => context.handleNextEvent(moreInfoLink, page.href)}
                    variant="contained"
                    color="primary">
                    {page.title}
                  </Button>
                </Grid>
              ))}
  
              <Grid item xs={12} style={{ marginTop: '2vh' }}>
                <Typography className={classes.subTitle}>
                  just 1 more step
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {
          context.errorMsg ? ( <ErrorModal showModal={context.showErroModal} msg={context.errorMsg}/>) : null
        }
       
      </Grid>
    );
  }}
   
  </StepperDataContext.Consumer>)
};
ReservePage.propTypes = {
  className: PropTypes.string
};

export default withRouter(ReservePage);
