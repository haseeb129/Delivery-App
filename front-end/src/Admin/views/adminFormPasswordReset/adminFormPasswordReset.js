import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  IconButton,
  Link,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  withStyles,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  margin: {
    width :'100%',
    marginTop: "3vh",
  
  },
  quote: {

    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg)',
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
    marginTop: theme.spacing(1),
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
    paddingTop: theme.spacing(1),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },

  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
    BootstrapInput:{
      backgroundColor:"#ffffff",
      color:"ffffff"


  },
  form: {
    paddingLeft: 200,
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
  forgotPassword:{
marginLeft:"12vh"
  },

  sugestion: {
    marginTop: theme.spacing(200),
    marginLeft: "-50vh"
  },
  textField: {
    marginTop: theme.spacing(20)
  },
  signInButton: {
    margin: theme.spacing(2,7),
    backgroundColor: '#e3242b',
    color: '#ffffff',
    marginLeft:"0vh",
    width:"100%"
  }
}));
const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    backgroundColor:"white"
    // Use the system font instead of the default Roboto font.
 
  }
}))(InputBase);



const AdminPanel= props => {
  const { history } = props;



  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleBack = () => {
    history.goBack();
  };

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignIn = event => {
    event.preventDefault();
    history.push('/');
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.quoteContainer}
          item
         xs={12} md={5}
        >
          <div className={classes.quote}>
            <div className={classes.person}>
              <Typography
                className={classes.name}
                variant="h1"
              >
              Welcome to Admin Panel
              </Typography>
              <div className={classes.person}>
                <Typography
                  className={classes.name}
                  variant="h1"
                >
                Reset Your Password
                </Typography>
             
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          className={classes.content}
          item
          md={7}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                onSubmit={handleSignIn}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  Forgot Password?
                </Typography>
               { /*<Typography
                  color="textSecondary"
                  gutterBottom
                >
                  Sign in with social media
                </Typography>*/}
              {/*  <Grid
                  className={classes.socialButtons}
                  container
                  spacing={2}
                >
                  <Grid item>
                    <Button
                      color="primary"
                      onClick={handleSignIn}
                      size="large"
                      variant="contained"
                    >
                      <FacebookIcon className={classes.socialIcon} />
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={handleSignIn}
                      size="large"
                      variant="contained"
                    >
                      <GoogleIcon className={classes.socialIcon} />
                      Login with Google
                    </Button>
                  </Grid>
              </Grid>*/}
               {/* <Typography
                  align="center"
                  className={classes.sugestion}
                  color="textSecondary"
                  variant="body1"
                >
                  or login with email address
               </Typography>*/}
              
            <Grid item xs={12} md={12}>
      <FormControl className={classes.margin}  error={hasError('email')}
                 
                  helperText={
                    hasError('email') ? formState.errors.email[0] : null
                  }
             
                >
        <InputLabel shrink htmlFor="bootstrap-input" > 
        <h2>New Password</h2>
        </InputLabel>
        <BootstrapInput id="bootstrap-input"  />
      </FormControl>
      
    <Grid item xs={12}>
      <FormControl className={classes.margin}  error={hasError('email')}
                  fullWidth
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
             
                >
        <InputLabel shrink  >
        <h2>Confirm New Password</h2>
        </InputLabel>
        <BootstrapInput  id="bootstrap-input" className={BootstrapInput}/>
      </FormControl>
      </Grid>
              <Grid item xs={12} md={12}>
                <Button variant="contained" className={classes.signInButton} size="large" width="50"  component={RouterLink}
                    to="/dashboard"
                  >
                   SUBMIT
               </Button>
               </Grid>
     
                </Grid>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

AdminPanel.propTypes = {
  history: PropTypes.object
};

export default withRouter(AdminPanel);

