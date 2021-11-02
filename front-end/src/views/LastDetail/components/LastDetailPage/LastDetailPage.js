import React, { forwardRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { NavLink as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Grid, Typography, FormControlLabel, Switch } from '@material-ui/core';
import '../../../../App.css';
import { StepperDataContext } from '../../../../contexts/StepperDataContext';

const useStyles = makeStyles(() => ({
  root: {},
  TitleWrapper: {
    paddingLeft: '30vh',
    '@media (max-width:787px)': {
      paddingLeft: '0'
    }
  },
  title: {
    fontSize: '3rem',
    color: '#101820FF',
    lineHeight: '50px',
    '@media (max-width:787px)': {
      fontSize: '1.5rem'
    }
  },
  SubtitleWrapper: {
    paddingTop: '5vh',
    paddingLeft: '30vh',
    '@media (max-width:787px)': {
      paddingLeft: '0',
      paddingTop: '2vh'
    }
  },
  subTitle: {
    fontSize: '23px',
    fontWeight: 'lighter',
    color: '#101820FF'
  },

  FooterTitle: {
    lineHeight: '130px',
    fontSize: '35px',
    color: '#101820FF'
  },
  Button: {
    width: '35vh',
    height: '7vh',
    fontSize: '20px',
    color: '#101820ff',
    borderRadius: '25px',
    background: 'white',
    '&:hover': {
      backgroundColor: 'white'
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
    width: '50vh',
    height: '7vh',
    fontSize: '20px',
    color: '#101820ff',
    borderRadius: '25px',
    background: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    }
  },

  Autocomplete: {
    width: '400',
    backgroundColor: 'white',
    color: 'white',
    '@media (max-width:787px)': {
      width: '300'
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
  InputContainer1: {
    paddingLeft: '13vh',
    paddingTop: '9vh',
    '@media (max-width:787px)': {
      paddingLeft: '0',
      paddingTop: '3vh'
    }
  },
  InputContainer2: {
    paddingLeft: '5vh',
    '@media (max-width:787px)': {
      paddingLeft: '0vh',
      paddingTop: '3vh'
    }
  },

  BTNContainer: {
    paddingTop: '10vh',
    paddingLeft: '16vh',
    '@media (max-width:787px)': {
      paddingLeft: '0vh',
      paddingTop: '3vh'
    }
  },
  PT: {
    paddingTop: '8vh',
    '@media (max-width:787px)': {
      paddingTop: '5vh'
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

const dockDistance = ['0 to 50 m', '51 to 100 m', '101 to 150 m'];
const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));
const pages = [
  {
    title: 'Next',
    href: '/review'
  }
];

const LastDetailPage = (props) => {
  const { className } = props;

  const classes = useStyles();

  const [] = useState('');
  const [] = useState('');
  const [] = useState('');
  const [] = useState('');

  return (
    <StepperDataContext.Consumer>
      {(context) => {
        return (
          <Grid
            container
            xs={12}
            align="center"
            justify="center"
            style={{ marginTop: '4vh' }}>
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
              <Grid item xs={12} className={classes.TitleWrapper}>
                <Typography className={classes.title}>
                  Moving Logistics
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.SubtitleWrapper}>
                <Typography className={classes.subTitle}>
                  Last details of your move
                </Typography>
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={0} sm={2} />
              <Grid
                container
                xs={12}
                sm={8}
                className={classes.InputContainer1}>
                <Grid container xs={12} sm={6} align="left">
                  <Grid item xs={12} align="left">
                    <div style={{ margin: '0 40px' }}>
                      <Autocomplete
                        onChange={(e, v) =>
                          context.lastDetailsMovingFromHandler(v)
                        }
                        className={classes.Autocomplete}
                        inputStyle={{ color: 'white' }}
                        align="left"
                        defaultValue={context.moveFrom}
                        InputProps={{
                          className: classes.inputColor
                        }}
                        id="combo-box-demo"
                        options={[
                          '1',
                          '2',
                          '3',
                          '4',
                          '5',
                          '6',
                          '7',
                          '8',
                          '9',
                          '10'
                        ]}
                        renderInput={(params) => (
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
                            label="What floor are you moving from?"
                            variant="outlined"
                          />
                        )}
                      />
                      <FormControlLabel
                        style={{ margin: '0' }}
                        control={
                          <Switch
                            onClick={
                              context.lastDetaislMovingFromElevatorHandler
                            }
                            checked={context.moveFromElevator}
                            name="checkedB"
                            color="secondary"
                            size="small"
                          />
                        }
                        label="Elevator Available"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} align="left" className={classes.PT}>
                    <div style={{ margin: '0 40px' }}>
                      <Autocomplete
                        onChange={(e, v) =>
                          context.lastDetailsMovingToHandler(v)
                        }
                        className={classes.Autocomplete}
                        inputStyle={{ color: 'white' }}
                        align="left"
                        defaultValue={context.moveTo}
                        InputProps={{
                          className: classes.inputColor
                        }}
                        id="combo-box-demo"
                        options={[
                          '1',
                          '2',
                          '3',
                          '4',
                          '5',
                          '6',
                          '7',
                          '8',
                          '9',
                          '10'
                        ]}
                        renderInput={(params) => (
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
                            label="What floor are you moving to?"
                            variant="outlined"
                          />
                        )}
                      />
                      <FormControlLabel
                        style={{ margin: '0' }}
                        control={
                          <Switch
                            checked={context.moveToElevator}
                            onClick={context.lastDetaislMovingToElevatorHandler}
                            name="checkedB"
                            color="secondary"
                            size="small"
                          />
                        }
                        label="Elevator Available"
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  sm={6}
                  align="left"
                  className={classes.InputContainer2}>
                  <Grid item xs={12}>
                    <div style={{ margin: '0 40px' }}>
                      <Autocomplete
                        onChange={(e, v) =>
                          context.lastDetailsLoadingDockHandler(v)
                        }
                        className={classes.Autocomplete}
                        inputStyle={{ color: 'white' }}
                        align="left"
                        defaultValue={context.loadingDock}
                        InputProps={{
                          className: classes.inputColor
                        }}
                        id="combo-box-demo"
                        options={dockDistance}
                        renderInput={(params) => (
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
                            label="How far is the loading dock?"
                            variant="outlined"
                          />
                        )}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} className={classes.PT}>
                    <div style={{ margin: '0 40px' }}>
                      <Autocomplete
                        onChange={(e, v) =>
                          context.lastDetailsDoorRemovingHandler(v)
                        }
                        className={classes.Autocomplete}
                        inputStyle={{ color: 'white', margin: '0 40px' }}
                        align="left"
                        defaultValue={context.doorRemoval}
                        InputProps={{
                          className: classes.inputColor
                        }}
                        id="combo-box-demo"
                        options={[
                          '1',
                          '2',
                          '3',
                          '4',
                          '5',
                          '6',
                          '7',
                          '8',
                          '9',
                          '10'
                        ]}
                        renderInput={(params) => (
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
                            label="Door removal needed?"
                            variant="outlined"
                          />
                        )}
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid container xs={12} className={classes.BTNContainer}>
                  <Grid item xs={12}>
                    {pages.map((page) => (
                      <Grid item xs={12}>
                        <Button
                          // disabled={context.moveFrom === '' || context.moveTo === '' || context.loadingDock === '' || context.doorRemoval === ''}
                          activeClassName={classes.active}
                          className={classes.Button}
                          key={page.title}
                          component={CustomRouterLink}
                          to={page.href}
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
          </Grid>
        );
      }}
    </StepperDataContext.Consumer>
  );
};
LastDetailPage.propTypes = {
  className: PropTypes.string
};

export default LastDetailPage;
