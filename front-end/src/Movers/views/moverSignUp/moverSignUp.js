import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/styles';
import { MoverContext } from '../../contexts/MoverContext';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  FormHelperText,
  Checkbox,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ConfigContext } from 'antd/lib/config-provider';

// const schema = {
//   name: {
//     presence: { allowEmpty: false, message: 'is required' },
//     length: {
//       maximum: 32
//     }
//   },
//   companyName: {
//     presence: { allowEmpty: false, message: 'is required' },
//     length: {
//       maximum: 32
//     }
//   },
//   email: {
//     presence: { allowEmpty: false, message: 'is required' },
//     email: true,
//     length: {
//       maximum: 64
//     }
//   },
//   password: {
//     presence: { allowEmpty: false, message: 'is required' },
//     length: {
//       maximum: 128
//     }
//   },
//   policy: {
//     presence: { allowEmpty: false, message: 'is required' }
//     // checked: true
//   }
// };

const useStyles = makeStyles((theme) => ({
  root: {
    '&:.MuiAppBar-positionFixed': {
      display: 'none'
    },
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    position: 'relative',
    top: '0vh',
    zIndex: '999999'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage:
      'url(https://ecobox.co.za/wp-content/uploads/2017/10/find-choose-mover-south-africa.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '5px',
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  Autocomplete: {
    margin: '1rem 0',
    color: 'white'
  },
  inputColor: {
    color: 'white',
    fontWeight: 'bold'
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  signUpButton: {
    margin: theme.spacing(2, 0)
  },
  danger: {
    color: 'red',
    fontWeight: 'bold'
  },
  success: {
    color: 'green',
    fontWeight: 'bold'
  }
}));

const SignUp = (props) => {
  const { history } = props;

  const classes = useStyles();

  // const [formState, setFormState] = useState({
  //   isValid: false,
  //   values: {},
  //   touched: {},
  //   errors: {}
  // });

  // useEffect(() => {
  //   const errors = validate(formState.values, schema);
  //   setFormState((formState) => ({
  //     ...formState,
  //     isValid: errors ? false : true,
  //     errors: errors || {}
  //   }));
  // }, [formState.values]);

  // const handleChange = (event) => {
  //   event.persist();

  //   setFormState((formState) => ({
  //     ...formState,
  //     values: {
  //       ...formState.values,
  //       [event.target.name]:
  //         event.target.type === 'checkbox'
  //           ? event.target.checked
  //           : event.target.value
  //     },
  //     touched: {
  //       ...formState.touched,
  //       [event.target.name]: true
  //     }
  //   }));
  // };

  const handleBack = () => {
    history.goBack();
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    history.push('/');
  };

  // const hasError = (field) => {
  //   return formState.touched[field] && formState.errors[field] ? true : false;
  // };

  return (
    <MoverContext.Consumer>
      {(context) => {
        return (
          <div className={classes.root}>
            <Grid className={classes.grid} container>
              <Grid className={classes.quoteContainer} item lg={5}>
                <div className={classes.quote}>
                  <div className={classes.quoteInner}>
                    <Typography className={classes.quoteText} variant="h1">
                      Mover SignUp
                    </Typography>
                    <div className={classes.person}>
                      <Typography className={classes.name} variant="body1">
                        Signupu here
                      </Typography>
                      <Typography className={classes.bio} variant="body2">
                        Manager at inVision
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid className={classes.content} item lg={7} xs={12}>
                <div className={classes.content}>
                  <div className={classes.contentHeader}>
                    <IconButton onClick={handleBack}>
                      <ArrowBackIcon />
                    </IconButton>
                  </div>
                  <div className={classes.contentBody}>
                    {/* <form
                      className={classes.form}
                      onSubmit={() => context.handleSignUp(formState)}> */}
                    <div className={classes.form}>
                      {context.errorMsg && (
                        <div className={classes.danger}>{context.errorMsg}</div>
                      )}
                      {context.signupSuccess && (
                        <div className={classes.success}>
                          {context.signupSuccess}
                        </div>
                      )}
                      <Typography className={classes.title} variant="h2">
                        Create new account
                      </Typography>
                      <Typography color="textSecondary" gutterBottom>
                        Use your email to create new account
                      </Typography>
                      <Grid container lg={12} xs={12}>
                        <Grid className={classes.content} item lg={12} xs={12}>
                          <TextField
                            className={classes.textField}
                            fullWidth
                            label="Full name"
                            name="name"
                            onChange={context.signupHandleChange}
                            type="text"
                            value={context.signupForm.name}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid className={classes.content} item lg={12} xs={12}>
                          <TextField
                            className={classes.textField}
                            label="Email"
                            name="email"
                            onChange={context.signupHandleChange}
                            type="text"
                            value={context.signupForm.email}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid className={classes.content} item lg={12} xs={12}>
                          <TextField
                            className={classes.textField}
                            fullWidth
                            label="Company Name"
                            name="companyName"
                            onChange={context.signupHandleChange}
                            type="text"
                            value={context.signupForm.companyName}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid className={classes.content} item lg={12} xs={12}>
                          <TextField
                            className={classes.textField}
                            fullWidth
                            label="Phone #"
                            name="phone"
                            onChange={context.signupHandleChange}
                            type="text"
                            value={context.signupForm.phone}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                      <Grid className={classes.content} item lg={12} xs={12}>
                        {/* {console.log(context.cities)} */}
                        {/* {context.cities.map((city) => city.name).join(' ')} */}
                        <Autocomplete
                          className={classes.Autocomplete}
                          inputStyle={{ color: 'white' }}
                          align="left"
                          InputProps={{
                            className: classes.inputColor
                          }}
                          id="combo-box-demofff"
                          options={context.cities}
                          getOptionLabel={(option) =>
                            option ? option.name : ''
                          }
                          defaultValue={context.from}
                          openOnFocus={true}
                          onChange={(e, value) => {
                            console.log(e, value);
                            context.areaChangeHandler(value);
                          }}
                          renderInput={(params) => (
                            <TextField
                              value={context.area}
                              required
                              inputProps={{
                                classes: {
                                  input: classes.resize,
                                  root: classes.label,
                                  focused: classes.focusedLabel,
                                  error: classes.erroredLabel
                                }
                              }}
                              {...params}
                              label="Area"
                              variant="outlined"
                            />
                          )}
                        />
                      </Grid>

                      <Grid className={classes.content} item lg={12} xs={12}>
                        <TextField
                          className={classes.textField}
                          // error={(context, hasError('password'))}
                          // helperText={
                          //   hasError('password')
                          //     ? formState.errors.password[0]
                          //     : null
                          // }
                          fullWidth
                          label="Password"
                          name="password"
                          onChange={context.signupHandleChange}
                          type="password"
                          value={context.signupForm.password}
                          variant="outlined"
                        />
                      </Grid>
                      {console.log(context.signupForm)}
                      <div className={classes.policy}>
                        <Checkbox
                          checked={context.signupForm.policy}
                          className={classes.policyCheckbox}
                          color="primary"
                          name="policy"
                          onChange={context.signupHandleChange}
                        />
                        <Typography
                          className={classes.policyText}
                          color="textSecondary"
                          variant="body1">
                          I have read the{' '}
                          <Link
                            color="primary"
                            component={RouterLink}
                            to="#"
                            underline="always"
                            variant="h6">
                            Terms and Conditions
                          </Link>
                        </Typography>
                      </div>
                      <Button
                        className={classes.signUpButton}
                        color="primary"
                        disabled={
                          context.signupForm.name === '' ||
                          context.signupForm.companyName === '' ||
                          context.signupForm.email === '' ||
                          context.signupForm.password === '' ||
                          context.signupForm.phone === ''
                        }
                        fullWidth
                        size="large"
                        onClick={context.handleSignUp}
                        variant="contained">
                        Sign up now
                      </Button>
                      <Typography color="textSecondary" variant="body1">
                        Have an account?{' '}
                        <Link
                          component={RouterLink}
                          to="/mover/signin"
                          variant="h6">
                          Sign in
                        </Link>
                      </Typography>
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        );
      }}
    </MoverContext.Consumer>
  );
};

SignUp.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignUp);
