import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button, Typography } from '@material-ui/core';
import { Link as RouterLink, withRouter, Redirect } from 'react-router-dom';
import { MoverContext } from '../../contexts/MoverContext';
import validate from 'validate.js';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(2),
      width: '35ch'
    },
    '& p': {
      marginTop: '2vh'
    },
    '& input': {
      marginTop: '2vh'
    }
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

export default function MoverPanel() {
  const classes = useStyles();

  return (
    <MoverContext>
      {(context) => {
        return !context.isAuthenticated ? (
          <Grid container xs={12}>
            <Grid style={{ padding: '0vh 9vh' }} item xs={8}>
              <img
                src="https://ecobox.co.za/wp-content/uploads/2017/10/find-choose-mover-south-africa.jpg"
                alt="new"
                style={{ height: '88vh', width: '100%' }}
              />
            </Grid>
            <Grid container xs={4} style={{ marginTop: '20rem' }}>
              <Grid item xs={12}>
                <Typography className={classes.title} variant="h2">
                  Mover Sign In
                </Typography>
                {context.errorMsg && (
                  <div className={classes.danger}>{context.errorMsg}</div>
                )}
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="email"
                  fullWidth
                  label="Email"
                  value={context.loginForm.email}
                  onChange={context.loginHandleChange}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  fullWidth
                  value={context.loginForm.password}
                  onChange={context.loginHandleChange}
                />
              </Grid>
              <Grid item xs={8}>
                <Button
                  disabled={
                    context.loginForm.email === '' ||
                    context.loginForm.password === ''
                  }
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={context.handleLogin}
                  style={{ marginTop: '6vh', marginLeft: '0vh' }}>
                  Login
                </Button>
                <p>
                  Don't have account{' '}
                  <RouterLink to="/mover/signup">Please Signup</RouterLink>
                </p>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Redirect to="/mover/dashboard" />
        );
      }}
    </MoverContext>
  );
}
