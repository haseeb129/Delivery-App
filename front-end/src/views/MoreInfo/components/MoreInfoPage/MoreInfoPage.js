import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import '../../../../App.css';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorModal from '../../../../layouts/ErrorModal/index';
import { StepperDataContext } from '../../../../contexts/StepperDataContext';
const styles = (theme) => ({
  root: {},
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
    marginTop: '3rem',
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

class MoreInfoPage extends React.Component {
  static contextType = StepperDataContext;
  constructor(props) {
    super(props);
  }

  render() {
    let context = this.context;
    const { classes } = this.props;
    let url = '';
    if (this.props.location) {
      if (this.props.location.state.fromLink === 'Residential') {
        url = '/review';
      } else if (this.props.location.state.fromLink === 'BookNow') {
        url = '/lastdetail';
      }
    }
    url = 'lastdetail';
    // console.log(context.Sizes[context.title])
    console.log(this.context);
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
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography className={classes.title}>
              We want to help you Save Money
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          className={classes.SubHeadingWrapper}
          style={{}}>
          <Grid item xs={12}>
            <Typography className={classes.subTitle}>
              Tell us how much Stuff you have
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          className={classes.FormContainer}
          style={{}}
          className={classes.MT}>
          <Grid container xs={0} sm={2} lg={2} />
          <Grid container xs={12} sm={12} lg={8} justify="space-evenly">
            <Grid item xs={12} sm={6} lg={4}>
              <form className={classes.PD}>
                <FormControl
                  required
                  variant="outlined"
                  className={classes.formControl}
                  align="left"
                  style={{ width: 250, background: 'white' }}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Living Room
                  </InputLabel>
                  <Select
                    onChange={context.livingRoomChangeHandler}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                    defaultValue={context.livingRoom}>
                    {context.ListOfLivingRoom.map((items) => (
                      <MenuItem
                        value={items.item.toString()}
                        onClick={() => {
                          context.handleOpen(
                            items.item,
                            items.sm,
                            items.isSelected,
                            'ListOfLivingRoom'
                          );
                        }}>
                        <div className={classes.DropDownList}>
                          {items.item.replace(/_/g, ' ')}{' '}
                          {items.isSelected ? (
                            <span className={classes.Cross}>X</span>
                          ) : null}{' '}
                        </div>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Dialog
                  disableBackdropClick="true"
                  open={context.openModel}
                  onClose={context.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description">
                  <DialogTitle
                    id="alert-dialog-title"
                    style={{}}
                    className={classes.DialogTitleHeading}
                    onClose={context.handleClose}>
                    {context.title.replace(/_/g, ' ')}
                  </DialogTitle>
                  <DialogContent className={classes.DialogContent}>
                    <Grid container xs={12} align="center">
                      <Grid item xs={12}>
                        <form
                          onSubmit={context.handleSubmit}
                          className={classes.PD}>
                          <Typography
                            className={classes.DialogSubTitle}
                            style={{}}>
                            Quantity of {context.title.replace(/_/g, ' ')}
                          </Typography>
                          <Typography className={classes.DialogSubText}>
                            {context.specificationMessagae}
                          </Typography>
                          <Grid
                            item
                            xs={12}
                            align="center"
                            style={{ paddingTop: '3vh' }}>
                            {context.shareholders.map(() => (
                              <FormControl
                                required
                                variant="outlined"
                                className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Quantity
                                </InputLabel>
                                <Select
                                  style={{
                                    width: 250,
                                    textAlign: 'left'
                                  }}
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  value={context.age}
                                  label={context.item}>
                                  {context.Quantity.map((quantity) => (
                                    <MenuItem
                                      style={{ maxHeight: '80px' }}
                                      value={quantity.id}
                                      onClick={() => {
                                        context.handleChangeSelect(
                                          context.title,
                                          quantity.id
                                        );
                                      }}>
                                      {quantity.id}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            ))}
                          </Grid>
                          <div>
                            {context.Sizes[context.title] !== undefined
                              ? context.details[context.title].map((i) => {
                                  return (
                                    <div key={i.id}>
                                      <FormControl
                                        required
                                        variant="outlined"
                                        className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">
                                          Size
                                        </InputLabel>
                                        <Select
                                          style={{
                                            width: 250,
                                            textAlign: 'left'
                                          }}
                                          labelId="demo-simple-select-outlined-label"
                                          id="demo-simple-select-outlined"
                                          value={context.age}
                                          label={context.item}>
                                          {context.Sizes[context.title].map(
                                            (size) => (
                                              <MenuItem
                                                style={{ maxHeight: '80px' }}
                                                value={size}
                                                onClick={() => {
                                                  context.changeSizeHandler(
                                                    size,
                                                    i.id,
                                                    context.Prices[
                                                      context.title
                                                    ]
                                                  );
                                                }}>
                                                {size}
                                              </MenuItem>
                                            )
                                          )}
                                        </Select>
                                      </FormControl>
                                    </div>
                                  );
                                })
                              : context.details[context.title].map((i) => {
                                  return (
                                    <div key={i.id}>
                                      <TextField
                                        required
                                        style={{
                                          textAlign: 'left',
                                          width: 250,
                                          paddingTop: '1vh'
                                        }}
                                        onChange={(e) =>
                                          context.changeSizeHandler(e, i.id)
                                        }
                                        id="outlined-basic"
                                        label="Size"
                                        variant="outlined"
                                      />
                                    </div>
                                  );
                                })}
                          </div>
                          <button
                            disabled={
                              context.details[context.title].length === 0 ||
                              (context.details[context.title].length > 0 &&
                                context.details[context.title][
                                  context.details[context.title].length - 1
                                ].sizing === 0)
                            }>
                            Submit
                          </button>
                        </form>
                      </Grid>
                    </Grid>
                  </DialogContent>
                </Dialog>
              </form>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <form className={classes.PD}>
                <FormControl
                  required
                  variant="outlined"
                  className={classes.formControl}
                  align="left"
                  style={{ width: 250, background: 'white' }}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Dining Room
                  </InputLabel>
                  <Select
                    onChange={context.diningRoomChangeHandler}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                    defaultValue={context.diningRoom}>
                    {context.ListOfDiningRoom.map((items) => (
                      <MenuItem
                        value={items.item.toString()}
                        onClick={() => {
                          context.handleOpenDining(
                            items.item,
                            items.sm,
                            items.isSelected,
                            'ListOfDiningRoom'
                          );
                        }}>
                        <div className={classes.DropDownList}>
                          {items.item.replace(/_/g, ' ')}{' '}
                          {items.isSelected ? (
                            <span className={classes.Cross}>X</span>
                          ) : null}{' '}
                        </div>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Dialog
                  open={context.openModelDining}
                  onClose={context.handleCloseDining}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description">
                  <DialogTitle
                    id="alert-dialog-title"
                    style={{ fontSize: '40px' }}
                    onClose={context.handleCloseDining}>
                    {context.title.replace(/_/g, ' ')}
                  </DialogTitle>
                  <DialogContent className={classes.DialogContent}>
                    <Grid container xs={12} align="center">
                      <Grid item xs={12}>
                        <form
                          onSubmit={context.handleSubmit}
                          className={classes.PD}>
                          <Typography className={classes.DialogSubTitle}>
                            Quantity of {context.title.replace(/_/g, ' ')}
                          </Typography>
                          <Typography className={classes.DialogSubText}>
                            {context.specificationMessagae}
                          </Typography>
                          <Grid
                            item
                            xs={12}
                            align="center"
                            style={{ paddingTop: '3vh' }}>
                            {context.shareholders.map(() => (
                              <FormControl
                                variant="outlined"
                                className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Quantity
                                </InputLabel>
                                <Select
                                  style={{
                                    width: 250,
                                    textAlign: 'left'
                                  }}
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  value={context.age}
                                  label={context.item}>
                                  {context.Quantity.map((quantity) => (
                                    <MenuItem
                                      style={{ maxHeight: '80px' }}
                                      value={quantity.id}
                                      onClick={() => {
                                        context.handleChangeSelect(
                                          context.title,
                                          quantity.id
                                        );
                                      }}>
                                      {quantity.id}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            ))}
                          </Grid>
                          <div>
                            {context.Sizes[context.title] !== undefined
                              ? context.details[context.title].map((i) => {
                                  return (
                                    <div key={i.id}>
                                      <FormControl
                                        required
                                        variant="outlined"
                                        className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">
                                          Size
                                        </InputLabel>
                                        <Select
                                          style={{
                                            width: 250,
                                            textAlign: 'left'
                                          }}
                                          labelId="demo-simple-select-outlined-label"
                                          id="demo-simple-select-outlined"
                                          value={context.age}
                                          label={context.item}>
                                          {context.Sizes[context.title].map(
                                            (size) => (
                                              <MenuItem
                                                style={{ maxHeight: '80px' }}
                                                value={size}
                                                onClick={() => {
                                                  context.changeSizeHandler(
                                                    size,
                                                    i.id,
                                                    context.Prices[
                                                      context.title
                                                    ]
                                                  );
                                                }}>
                                                {size}
                                              </MenuItem>
                                            )
                                          )}
                                        </Select>
                                      </FormControl>
                                    </div>
                                  );
                                })
                              : context.details[context.title].map((i) => {
                                  return (
                                    <div key={i.id}>
                                      <TextField
                                        required
                                        style={{
                                          textAlign: 'left',
                                          width: 250,
                                          paddingTop: '1vh'
                                        }}
                                        onChange={(e) =>
                                          context.changeSizeHandler(e, i.id)
                                        }
                                        id="outlined-basic"
                                        label="Size"
                                        variant="outlined"
                                      />
                                    </div>
                                  );
                                })}
                          </div>
                          <button
                            disabled={
                              context.details[context.title].length === 0 ||
                              (context.details[context.title].length > 0 &&
                                context.details[context.title][
                                  context.details[context.title].length - 1
                                ].sizing === 0)
                            }>
                            Submit
                          </button>
                        </form>
                      </Grid>
                    </Grid>
                  </DialogContent>
                </Dialog>
              </form>
            </Grid>
          </Grid>
          <Grid container xs={0} sm={2} lg={2} />
        </Grid>
        <Grid container xs={12} className={classes.MT}>
          <Grid container xs={0} sm={2} lg={2} />
          <Grid container xs={12} sm={12} lg={8} justify="space-evenly">
            <Grid item xs={12} sm={6} lg={4}>
              <form className={classes.PD}>
                <FormControl
                  required
                  variant="outlined"
                  className={classes.formControl}
                  align="left"
                  style={{ width: 250, background: 'white' }}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Bedrooms
                  </InputLabel>
                  <Select
                    onChange={context.bedRoomChangeHandler}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                    defaultValue={context.bedRoom}>
                    {context.ListOfBedrooms.map((items) => (
                      <MenuItem
                        value={items.item.toString()}
                        onClick={() => {
                          context.handleOpenBedroom(
                            items.item,
                            items.sm,
                            items.isSelected,
                            'ListOfBedrooms'
                          );
                        }}>
                        <div className={classes.DropDownList}>
                          {items.item.replace(/_/g, ' ')}{' '}
                          {items.isSelected ? (
                            <span className={classes.Cross}>X</span>
                          ) : null}{' '}
                        </div>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Dialog
                  open={context.openModelBedroom}
                  onClose={context.handleCloseBedroom}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description">
                  <DialogTitle
                    id="alert-dialog-title"
                    style={{ fontSize: '40px' }}
                    onClose={context.handleCloseBedroom}>
                    {context.title.replace(/_/g, ' ')}
                  </DialogTitle>
                  <DialogContent className={classes.DialogContent}>
                    <Grid container xs={12} align="center">
                      <Grid item xs={12}>
                        <form
                          onSubmit={context.handleSubmit}
                          className={classes.PD}>
                          <Typography className={classes.DialogSubTitle}>
                            Quantity of {context.title.replace(/_/g, ' ')}
                          </Typography>
                          <Typography className={classes.DialogSubText}>
                            {context.specificationMessagae}
                          </Typography>
                          <Grid
                            item
                            xs={12}
                            align="center"
                            style={{ paddingTop: '3vh' }}>
                            {context.shareholders.map(() => (
                              <FormControl
                                variant="outlined"
                                className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Quantity
                                </InputLabel>
                                <Select
                                  style={{
                                    width: 250,
                                    textAlign: 'left'
                                  }}
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  value={context.age}
                                  label={context.item}>
                                  {context.Quantity.map((quantity) => (
                                    <MenuItem
                                      style={{ maxHeight: '80px' }}
                                      value={quantity.id}
                                      onClick={() => {
                                        context.handleChangeSelect(
                                          context.title,
                                          quantity.id
                                        );
                                      }}>
                                      {quantity.id}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            ))}
                          </Grid>
                          <div>
                            {context.Sizes[context.title] !== undefined
                              ? context.details[context.title].map((i) => {
                                  return (
                                    <div key={i.id}>
                                      <FormControl
                                        required
                                        variant="outlined"
                                        className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">
                                          Size
                                        </InputLabel>
                                        <Select
                                          style={{
                                            width: 250,
                                            textAlign: 'left'
                                          }}
                                          labelId="demo-simple-select-outlined-label"
                                          id="demo-simple-select-outlined"
                                          value={context.age}
                                          label={context.item}>
                                          {context.Sizes[context.title].map(
                                            (size) => (
                                              <MenuItem
                                                style={{ maxHeight: '80px' }}
                                                value={size}
                                                onClick={() => {
                                                  context.changeSizeHandler(
                                                    size,
                                                    i.id,
                                                    context.Prices[
                                                      context.title
                                                    ]
                                                  );
                                                }}>
                                                {size}
                                              </MenuItem>
                                            )
                                          )}
                                        </Select>
                                      </FormControl>
                                    </div>
                                  );
                                })
                              : context.details[context.title].map((i) => {
                                  return (
                                    <div key={i.id}>
                                      <TextField
                                        required
                                        style={{
                                          textAlign: 'left',
                                          width: 250,
                                          paddingTop: '1vh'
                                        }}
                                        onChange={(e) =>
                                          context.changeSizeHandler(e, i.id)
                                        }
                                        id="outlined-basic"
                                        label="Size"
                                        variant="outlined"
                                      />
                                    </div>
                                  );
                                })}
                          </div>
                          <button
                            disabled={
                              context.details[context.title].length === 0 ||
                              (context.details[context.title].length > 0 &&
                                context.details[context.title][
                                  context.details[context.title].length - 1
                                ].sizing === 0)
                            }>
                            Submit
                          </button>
                        </form>
                      </Grid>
                    </Grid>
                  </DialogContent>
                </Dialog>
              </form>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <form>
                <FormControl
                  required
                  variant="outlined"
                  className={classes.formControl}
                  align="left"
                  style={{ width: 250, background: 'white' }}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Miscellaneous
                  </InputLabel>
                  <Select
                    onChange={context.miscChangeHandler}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                    defaultValue={context.misc}>
                    {context.ListOfMiscellaneous.map((items) => (
                      <MenuItem
                        value={items.item.toString()}
                        onClick={() => {
                          context.handleOpenMiscellaneous(
                            items.item,
                            items.sm,
                            items.isSelected,
                            'ListOfMiscellaneous'
                          );
                        }}>
                        <div className={classes.DropDownList}>
                          {items.item.replace(/_/g, ' ')}{' '}
                          {items.isSelected ? (
                            <span className={classes.Cross}>X</span>
                          ) : null}{' '}
                        </div>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Dialog
                  open={context.openModelMiscellaneous}
                  onClose={context.handleCloseMiscellaneous}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description">
                  <DialogTitle
                    id="alert-dialog-title"
                    style={{ fontSize: '40px' }}
                    onClose={context.handleCloseMiscellaneous}>
                    {context.title.replace(/_/g, ' ')}
                  </DialogTitle>
                  <DialogContent className={classes.DialogContent}>
                    <Grid container xs={12} align="center">
                      <Grid item xs={12}>
                        {context.title === 'Gym_Equipment' ? (
                          <div>
                            <form
                              onSubmit={context.handleSubmit}
                              className={classes.PD}>
                              <Typography className={classes.DialogSubTitle}>
                                Size of {context.title.replace(/_/g, ' ')}
                              </Typography>
                              <Typography className={classes.DialogSubText}>
                                {context.specificationMessagae}
                              </Typography>
                              <Grid
                                item
                                xs={12}
                                align="center"
                                style={{ paddingTop: '3vh' }}>
                                {context.shareholders.map(() => (
                                  <FormControl
                                    variant="outlined"
                                    className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">
                                      Size
                                    </InputLabel>
                                    <Select
                                      style={{
                                        width: 250,
                                        textAlign: 'left'
                                      }}
                                      labelId="demo-simple-select-outlined-label"
                                      id="demo-simple-select-outlined"
                                      value={context.age}
                                      label={context.item}>
                                      {context.Sizes[context.title].map(
                                        (size) => (
                                          <MenuItem
                                            style={{ maxHeight: '80px' }}
                                            value={size}
                                            onClick={() => {
                                              context.handleChangeSelect(
                                                context.title,
                                                size
                                              );
                                            }}>
                                            {size}
                                          </MenuItem>
                                        )
                                      )}
                                    </Select>
                                    <button
                                      disabled={
                                        context.details[context.title]
                                          .length === 0 ||
                                        (context.details[context.title].length >
                                          0 &&
                                          context.details[context.title][
                                            context.details[context.title]
                                              .length - 1
                                          ].sizing === 0)
                                      }>
                                      Submit
                                    </button>
                                  </FormControl>
                                ))}
                              </Grid>
                            </form>
                          </div>
                        ) : (
                          <div>
                            <form
                              onSubmit={context.handleSubmit}
                              className={classes.PD}>
                              <Typography className={classes.DialogSubTitle}>
                                Quantity of {context.title.replace(/_/g, ' ')}
                              </Typography>
                              <Typography className={classes.DialogSubText}>
                                {context.specificationMessagae}
                              </Typography>
                              <Grid
                                item
                                xs={12}
                                align="center"
                                style={{ paddingTop: '3vh' }}>
                                {context.shareholders.map(() => (
                                  <FormControl
                                    variant="outlined"
                                    className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">
                                      Quantity
                                    </InputLabel>
                                    <Select
                                      style={{
                                        width: 250,
                                        textAlign: 'left'
                                      }}
                                      labelId="demo-simple-select-outlined-label"
                                      id="demo-simple-select-outlined"
                                      value={context.age}
                                      label={context.item}>
                                      {context.Quantity.map((quantity) => (
                                        <MenuItem
                                          style={{ maxHeight: '80px' }}
                                          value={quantity.id}
                                          onClick={() => {
                                            context.handleChangeSelect(
                                              context.title,
                                              quantity.id
                                            );
                                          }}>
                                          {quantity.id}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                ))}
                              </Grid>
                              <div>
                                {/* {context.Sizes[context.title]} */}
                                {context.Sizes[context.title] !== undefined
                                  ? context.details[context.title].map((i) => {
                                      return (
                                        <div key={i.id}>
                                          <FormControl
                                            required
                                            variant="outlined"
                                            className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-outlined-label">
                                              Size
                                            </InputLabel>
                                            <Select
                                              style={{
                                                width: 250,
                                                textAlign: 'left'
                                              }}
                                              labelId="demo-simple-select-outlined-label"
                                              id="demo-simple-select-outlined"
                                              value={context.age}
                                              label={context.item}>
                                              {context.Sizes[context.title].map(
                                                (size) => (
                                                  <MenuItem
                                                    style={{
                                                      maxHeight: '80px'
                                                    }}
                                                    value={size}
                                                    onClick={() => {
                                                      context.changeSizeHandler(
                                                        size,
                                                        i.id,
                                                        context.Prices[
                                                          context.title
                                                        ]
                                                      );
                                                    }}>
                                                    {size}
                                                  </MenuItem>
                                                )
                                              )}
                                            </Select>
                                          </FormControl>
                                        </div>
                                      );
                                    })
                                  : context.details[context.title].map((i) => {
                                      return (
                                        <div key={i.id}>
                                          <TextField
                                            required
                                            style={{
                                              textAlign: 'left',
                                              width: 250,
                                              paddingTop: '1vh'
                                            }}
                                            onChange={(e) =>
                                              context.changeSizeHandler(e, i.id)
                                            }
                                            id="outlined-basic"
                                            label="Size"
                                            variant="outlined"
                                          />
                                        </div>
                                      );
                                    })}
                              </div>
                              <button
                                disabled={
                                  context.details[context.title].length === 0 ||
                                  (context.details[context.title].length > 0 &&
                                    context.details[context.title][
                                      context.details[context.title].length - 1
                                    ].sizing === 0)
                                }>
                                Submit
                              </button>
                            </form>
                          </div>
                        )}
                      </Grid>
                    </Grid>
                  </DialogContent>
                </Dialog>
              </form>
            </Grid>
          </Grid>
          <Grid container xs={0} sm={2} lg={2} />
        </Grid>
        <Grid container xs={12} className={classes.MT}>
          <Grid container xs={0} sm={2} lg={2} />

          <Grid container xs={12} sm={12} lg={8} justify="space-evenly">
            <Grid item xs={12} sm={6} lg={4}>
              <form>
                <FormControl
                  required
                  variant="outlined"
                  className={classes.formControl}
                  align="left"
                  style={{ width: 250, background: 'white' }}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Kitchen
                  </InputLabel>
                  <Select
                    required
                    onChange={context.kitchenChangeHandler}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                    defaultValue={context.kitchen}>
                    {context.ListOfKitchen.map((items) => (
                      <MenuItem
                        value={items.item.toString()}
                        onClick={() => {
                          context.handleOpen(
                            items.item,
                            items.sm,
                            items.isSelected,
                            'ListOfKitchen'
                          );
                        }}>
                        <div className={classes.DropDownList}>
                          {items.item.replace(/_/g, ' ')}{' '}
                          {items.isSelected ? (
                            <span className={classes.Cross}>X</span>
                          ) : null}{' '}
                        </div>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Dialog
                  open={context.openModelKitchen}
                  onClose={context.handleCloseKitchen}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description">
                  <DialogTitle
                    id="alert-dialog-title"
                    style={{ fontSize: '40px' }}
                    onClose={context.handleCloseKitchen}>
                    {context.title.replace(/_/g, ' ')}
                  </DialogTitle>
                  <DialogContent className={classes.DialogContent}>
                    <Grid container xs={12} align="center">
                      <Grid item xs={12}>
                        <form
                          onSubmit={context.handleSubmit}
                          className={classes.PD}>
                          <Typography className={classes.DialogSubTitle}>
                            Quantity of {context.title.replace(/_/g, ' ')}
                          </Typography>
                          <Typography className={classes.DialogSubText}>
                            {context.specificationMessagae}
                          </Typography>
                          <Grid
                            item
                            xs={12}
                            align="center"
                            style={{ paddingTop: '3vh' }}>
                            {context.shareholders.map(() => (
                              <FormControl
                                variant="outlined"
                                className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Quantity
                                </InputLabel>
                                <Select
                                  style={{
                                    width: 250,
                                    textAlign: 'left'
                                  }}
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  value={context.age}
                                  label={context.item}>
                                  {context.Quantity.map((quantity) => (
                                    <MenuItem
                                      style={{ maxHeight: '80px' }}
                                      value={quantity.id}
                                      onClick={() => {
                                        context.handleChangeSelect(
                                          context.title,
                                          quantity.id
                                        );
                                      }}>
                                      {quantity.id}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            ))}
                          </Grid>
                          <div>
                            {context.Sizes[context.title] !== undefined
                              ? context.details[context.title].map((i) => {
                                  return (
                                    <div key={i.id}>
                                      <FormControl
                                        required
                                        variant="outlined"
                                        className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">
                                          Size
                                        </InputLabel>
                                        <Select
                                          style={{
                                            width: 250,
                                            textAlign: 'left'
                                          }}
                                          labelId="demo-simple-select-outlined-label"
                                          id="demo-simple-select-outlined"
                                          value={context.age}
                                          label={context.item}>
                                          {context.Sizes[context.title].map(
                                            (size) => (
                                              <MenuItem
                                                style={{ maxHeight: '80px' }}
                                                value={size}
                                                onClick={() => {
                                                  context.changeSizeHandler(
                                                    size,
                                                    i.id,
                                                    context.Prices[
                                                      context.title
                                                    ]
                                                  );
                                                }}>
                                                {size}
                                              </MenuItem>
                                            )
                                          )}
                                        </Select>
                                      </FormControl>
                                    </div>
                                  );
                                })
                              : context.details[context.title].map((i) => {
                                  return (
                                    <div key={i.id}>
                                      <TextField
                                        required
                                        style={{
                                          textAlign: 'left',
                                          width: 250,
                                          paddingTop: '1vh'
                                        }}
                                        onChange={(e) =>
                                          context.changeSizeHandler(e, i.id)
                                        }
                                        id="outlined-basic"
                                        label="Size"
                                        variant="outlined"
                                      />
                                    </div>
                                  );
                                })}
                          </div>
                          <button
                            disabled={
                              context.details[context.title].length === 0 ||
                              (context.details[context.title].length > 0 &&
                                context.details[context.title][
                                  context.details[context.title].length - 1
                                ].sizing === 0)
                            }>
                            Submit
                          </button>
                        </form>
                      </Grid>
                    </Grid>
                  </DialogContent>
                </Dialog>
              </form>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              className={classes.btnWrapperstyle}>
              {pages.map((page) => (
                <Grid item xs={12}>
                  <Button
                    // disabled={context.livingRoom === '' && context.diningRoom === '' && context.bedRoom === '' && context.misc === '' && context.kitchen === ''}
                    disabled={
                      context.itemsValid || context.handleCheckDetailsItems()
                    }
                    activeClassName={classes.active}
                    className={classes.Button}
                    key={page.title}
                    // component={CustomRouterLink}
                    // to={url === '' ? '/review': url}
                    onClick={() => context.handleMoreInfoNextHandle(url)}
                    variant="contained"
                    color="primary">
                    {page.title}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid container xs={0} sm={2} lg={2} />
        </Grid>
        {/* <div className={classes.Question}>
          <Typography className={classes.pQuestion}>
            <span className={classes.PhoneIcon}>
              <PhoneIcon />
            </span>{' '}
            <a href="tel:+17879558832">Questions? Call us at 787-955-8832</a>
          </Typography>
        </div> */}
        {/* {

          console.log(context)
        } */}
        {context.errorMsg ? <ErrorModal msg={context.errorMsg} /> : null}
      </Grid>
    );
  }
}
MoreInfoPage.propTypes = {
  className: PropTypes.string
};
export default withRouter(withStyles(styles)(MoreInfoPage));
