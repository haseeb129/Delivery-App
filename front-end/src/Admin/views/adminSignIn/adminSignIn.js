import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button, Typography } from '@material-ui/core';
import { Link as RouterLink, withRouter, Redirect } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';
import validate from 'validate.js';

const schema = {
  loginEmail: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  loginPassword: {
    presence: { allowEmpty: false, message: 'is required' }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: '16px 0',
      width: '35ch'
    },
    '& input': {
      // marginTop: '2vh'
    },
    position: 'relative',
    top: 0,
    zIndex: 9999,
    margin: '10vh auto'
  }
}));

export default function AdminPanel() {
  const classes = useStyles();

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

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const hasError = field => {
    return formState.touched[field] && formState.errors[field] ? true : false;
  };

  return (
    <AdminContext.Consumer>
      {context => {
      console.log(context.loginError)
        return !context.isAuthenticated ? (
          <Grid container xs={12}>
            <Grid container xs={12} justify="center" spacing={2}>
              <form className={classes.root} style={{}}>
                <Grid item xs={12}>
                  <Typography className={classes.title} variant="h2">
                    Admin Sign In
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="loginEmail"
                    label="Email Or Phone"
                    value={formState.values.loginEmail || ''}
                    onChange={handleChange}
                    error={(context, hasError('loginEmail'))}
                    helperText={
                      hasError('loginEmail')
                        ? formState.errors.loginEmail[0]
                        : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    type="password"
                    variant="outlined"
                    label="Password"
                    fullWidth
                    name="loginPassword"
                    value={formState.values.loginPassword || ''}
                    onChange={handleChange}
                    error={(context, hasError('loginPassword'))}
                    helperText={
                      hasError('loginPassword')
                        ? formState.errors.loginPassword[0]
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    disabled={!formState.isValid}
                    onClick={() => context.handleLogin(formState.values)}
                    variant="contained"
                    color="primary"
                    // component={RouterLink}
                    // to="/admin/dashboard"
                    fullWidth
                    style={{ marginTop: '2vh', marginLeft: '0vh' }}>
                    Login
                  </Button>
                </Grid>
              {context.loginError && <div>{context.loginError}</div>}
              </form>
            </Grid>
          </Grid>
        ) : (
          <Redirect to="/admin/dashboard" />
        );
      }}
    </AdminContext.Consumer>
  );
}
