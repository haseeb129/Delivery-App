import React, { forwardRef } from 'react';

import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import '../../../../App.css';
import NumberFormat from 'react-number-format';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorModal from '../../../../layouts/ErrorModal/index';
import { StepperDataContext } from '../../../../contexts/StepperDataContext';

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  title: {
    fontSize: '3rem',
    color: '#101820FF',
    lineHeight: '50px',
    '@media (max-width:787px)': {
      fontSize: '1.3rem'
    }
  },
  SubHeadingWrapper: {
    marginTop: '3vh',
    '@media (max-width:787px)': {
      marginTop: '1vh'
    }
  },
  subTitle: {
    fontSize: '30px',
    color: '#101820FF',
    '@media (max-width:787px)': {
      fontSize: '18px'
    }
  },

  FooterTitle: {
    lineHeight: '130px',
    fontSize: '35px',
    color: '#101820FF'
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
    width: 250,
    marginTop: '0.7vh',
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
  DialogSubText: {
    color: '#7f7979',
    fontWeight: 'bold',
    lineHeight: '4vh',
    padding: '0 2vh'
  },

  DialogTitleHeading: {
    fontSize: '40px',
    '@media (max-width:787px)': {
      fontSize: '22px',
      lineHeight: '22px'
    }
  },
  DialogSubTitle: {
    fontSize: '30px',
    lineHeight: '30px',
    '@media (max-width:787px)': {
      fontSize: '18px',
      lineHeight: '18px'
    }
  },
  Autocomplete: {
    backgroundColor: 'white',
    color: 'white',
    width: '100%',
    width: 410,
    '@media (max-width:787px)': {
      width: 300,
      marginBottom: '.5rem'
    }
  },
  CardAutoComplete: {
    backgroundColor: 'white',
    color: 'white',
    width: '90%',
    '@media (max-width:787px)': {
      width: 300,
      marginBottom: '.5rem'
    }
  },
  label: {
    '&$focusedLabel': {
      color: 'cyan'
    },
    '&$erroredLabel': {
      color: 'orange'
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
  },
  Question: {
    padding: '1rem 0',
    // height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: '0rem',
    width: '100%',
    '@media (max-width:787px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: 'auto',
      position: 'initial'
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
  PD: {
    '@media (max-width:780px)': {
      padding: '0'
    }
  },
  MT: {
    marginTop: '1rem',
    '@media (max-width:780px)': {
      marginTop: '0vh'
    }
  },
  btnWrapperstyle: {
    // paddingLeft: '7vh',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width:1280px)': {
      padding: '0'
    }
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    padding: '0'
  },
  Cross: {
    textTransform: 'lowercase',
    fontSize: '18px',
    color: 'red',
    padding: '0 20px'
  },

  DropDownList: {
    position: 'relative',
    width: '100%'
  },
  DialogContent: {
    '@media (max-width:787px)': {
      padding: '8px 16px'
    }
  },
  FormContainer: {
    marginTop: '5vh',
    '@media (max-width:787px)': {
      marginTop: '2vh'
    }
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const pages = [
  {
    title: 'Next',
    href: '/lastdetail'
  }
];

class FinalStepPage extends React.Component {
  static contextType = StepperDataContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.context.totalPrice);
  }

  render() {
    const { classes } = this.props;
    let context = this.context;
    let url = '';
    if (this.props.location) {
      if (this.props.location.state.fromLink === 'Residential') {
        url = '/review';
      } else if (this.props.location.state.fromLink === 'BookNow') {
        url = '/lastdetail';
      }
    }
    return (
      <Grid container xs={12} align="center" justifyContent="center">
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
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Typography className={classes.title}>
                Pay Now and confirm You Booking!
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid
            container
            xs={12}
            className={classes.SubHeadingWrapper}
            style={{}}>
            <Grid item xs={12}>
              <Typography className={classes.subTitle}>
                Tell us how much Stuff you have
              </Typography>
            </Grid>
          </Grid> */}
          <Grid
            container
            xs={12}
            className={classes.FormContainer}
            style={{}}
            className={classes.MT}>
            <Grid container xs={0} sm={3} lg={3} />
            <Grid container xs={12} sm={6} lg={6} justify="space-evenly">
              <Grid item xs={12} sm={6} lg={5}>
                <TextField
                  align="left"
                  name="fullName"
                  onChange={context.finalStepFormHandler}
                  className={classes.Autocomplete}
                  value={context.finalStepForm.fullName}
                  required
                  label="Full Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={5}>
                <TextField
                  align="left"
                  name="email"
                  className={classes.DDTO}
                  onChange={context.finalStepFormHandler}
                  className={classes.Autocomplete}
                  value={context.finalStepForm.email}
                  required
                  label="Email"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container xs={0} sm={3} lg={3} />
          </Grid>
          <Grid container xs={12} className={classes.MT}>
            <Grid container xs={0} sm={3} lg={3} />
            <Grid container xs={12} sm={6} lg={6} justify="space-evenly">
              <Grid item xs={12} sm={6} lg={5}>
                <TextField
                  align="left"
                  name="phone"
                  className={classes.DDTO}
                  onChange={context.finalStepFormHandler}
                  className={classes.Autocomplete}
                  value={context.finalStepForm.phone}
                  required
                  label="Phone"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6} lg={5}>
                <TextField
                  align="left"
                  name="address"
                  className={classes.DDTO}
                  onChange={context.finalStepFormHandler}
                  className={classes.Autocomplete}
                  value={context.finalStepForm.address}
                  required
                  label="Address"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container xs={0} sm={3} lg={3} />
          </Grid>

          <Grid container xs={12} className={classes.MT}>
            <Grid container xs={0} sm={3} lg={3} />
            <Grid container xs={12} sm={6} lg={6} justify="center">
              <TextField
                align="left"
                name="cardNumber"
                style={{}}
                className={classes.DDTO}
                onChange={context.handleCardNumber}
                className={classes.CardAutoComplete}
                value={context.finalStepForm.cardNumber}
                required
                label="Card Number"
                variant="outlined"
              />
            </Grid>
            <Grid container xs={0} sm={3} lg={3} />
          </Grid>

          <Grid container xs={12} className={classes.MT}>
            <Grid container xs={0} sm={3} lg={3} />
            <Grid container xs={12} sm={6} lg={6} justify="space-evenly">
              <Grid item xs={12} sm={6} lg={5}>
                <TextField
                  align="left"
                  name="expiry"
                  className={classes.DDTO}
                  onChange={context.handleExpiry}
                  className={classes.Autocomplete}
                  value={context.finalStepForm.expiry}
                  required
                  label="Expiry MM/YY"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6} lg={5}>
                <TextField
                  align="left"
                  name="cvc"
                  className={classes.DDTO}
                  onChange={context.handleCvc}
                  className={classes.Autocomplete}
                  value={context.finalStepForm.cvc}
                  required
                  label="CVC"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container xs={0} sm={3} lg={3} />
          </Grid>

          <Grid container xs={12} className={classes.MT}>
            <Grid container xs={0} sm={3} lg={3} />
            <Grid container xs={12} sm={6} lg={6} justify="space-evenly">
              <Button
                disabled={
                  context.finalStepForm.fullName === '' ||
                  context.finalStepForm.email === '' ||
                  context.finalStepForm.phone === '' ||
                  context.finalStepForm.cardNumber === '' ||
                  context.finalStepForm.cardNumber.length <= 18 ||
                  context.finalStepForm.cvc === '' ||
                  context.finalStepForm.cvc.length <= 2 ||
                  context.finalStepForm.expiry === '' ||
                  context.finalStepForm.expiry.length <= 4
                }
                activeClassName={classes.active}
                className={classes.Button}
                key={'Book Now'}
                onClick={context.saveNowHandler}
                variant="contained"
                color="primary">
                $ {context.totalPrice ? context.totalPrice.toFixed(2) : 0} Pay
                Now
              </Button>
            </Grid>
            <Grid container xs={0} sm={3} lg={3} />
          </Grid>

          {context.errorMsg ? <ErrorModal msg={context.errorMsg} /> : null}
        </Grid>
        {this.context.showErroModal ? (
          <ErrorModal msg={this.context.errorMsg} />
        ) : null}
      </Grid>
    );
  }
}
FinalStepPage.propTypes = {
  className: PropTypes.string
};

export default withStyles(styles)(FinalStepPage);
