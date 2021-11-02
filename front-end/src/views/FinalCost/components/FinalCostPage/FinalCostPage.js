import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import '../../../../App.css';
import CheckIcon from '@material-ui/icons/Check';
import { withStyles } from '@material-ui/styles';
import { StepperDataContext } from '../../../../contexts/StepperDataContext';

import ErrorModal from '../../../../layouts/ErrorModal/index';
const styles = () => ({
  WhiteBackground: {
    background: 'white',
    borderRadius: '40px',
    color: '#101820FF',
    border: '1px solid white',
    height: '12vh',
    width: '34vh',
    textAlign: 'center',
    '@media (max-width:780px)': {
      margin: '10px auto',
      height: '9vh'
    }
  },
  WhiteGrid: {},
  Button: {
    width: '30vh',
    height: '7vh',
    fontSize: '16px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF',
      color: 'white'
    },
    '@media (max-width:780px)': {
      width: '45vh'
    }
  },
  PriceWrapper1: {
    paddingTop: '5vh',
    '@media (max-width:780px)': {
      paddingTop: '3vh'
    }
  },
  PriceWrapper2: {
    paddingTop: '2.5vh',
    '@media (max-width:780px)': {
      paddingTop: '1.5vh'
    }
  },
  PriceWrapper3: {
    paddingTop: '1.6vh',
    '@media (max-width:780px)': {
      paddingTop: '1vh'
    }
  },
  Price: {
    color: '#101820FF',
    fontSize: '2.5rem',
    '@media (max-width:780px)': {
      fontSize: '1.5rem'
    }
  },
  Heading: {
    fontSize: '3rem',
    lineHeight: '1.5',
    textAlign: 'left',
    '@media (max-width:780px)': {
      textAlign: 'center',
      fontSize: '1.5rem',
      padding: '1vh'
    }
  },
  HeadWrapper: {
    paddingLeft: '13vh',
    '@media (max-width:780px)': {
      paddingLeft: '0vh',
      margin: '0px 10px',
      textAlign: 'center',
      lineHeight: '28px'
    }
  },
  SubHeading: {
    fontSize: '28px',
    '@media (max-width:780px)': {
      fontSize: '18px'
    }
  },
  largerBtnContent: {
    fontSize: '20px'
  },
  largerBtn: {
    width: '40vh',
    height: '7vh',
    fontSize: '16px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF',
      color: 'white'
    },
    '@media (max-width:780px)': {
      width: '45vh',
      fontSize: '2.7vh'
    }
  },
  Loader: {
    '@media (max-width:780px)': {
      margin: '0px -45px'
    }
  },
  SmallerBtnContent: {
    fontSize: '20px',
    '@media (max-width:780px)': {
      width: '45vh',
      fontSize: '2.7vh'
    }
  },
  UnderPriceWrapper: {
    marginTop: '-10vh',
    '@media (max-width:780px)': {
      margin: '0'
    }
  },
  UnderPrice: {
    fontSize: '15px',
    fontWeight: 'bold'
  },
  CheckListWrapper: {
    marginTop: '-11vh',
    '@media (max-width:780px)': {
      marginTop: '0'
    }
  },
  CheckList: {
    marginTop: '1.5vh',
    fontSize: '22px',
    '@media (max-width:780px)': {
      fontSize: '14px'
    }
  },
  CheckListIcon: {
    fontSize: '45px',
    '@media (max-width:780px)': {
      fontSize: '26px'
    }
  },
  SC: {
    textAlign: 'left',
    marginLeft: '-10px',
    '@media (max-width:780px)': {
      textAlign: 'center',
      marginLeft: '-40px'
    }
  },
  PT: {
    '@media (max-width:780px)': {
      paddingTop: '-7vh'
    }
  },
  MiddleBoxWrapper: {
    marginLeft: '-5vh',
    '@media (max-width:780px)': {
      marginLeft: '0vh'
    }
  },
  MainContainerWrapper: {
    paddingTop: '4vh',
    '@media (max-width:780px)': {
      paddingTop: '1vh'
    }
  },
  SABL: {
    paddingTop: '5vh',
    '@media (max-width:780px)': {
      paddingTop: '1vh'
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
});

class FinalCostPage extends React.Component {
  static contextType = StepperDataContext;
  constructor(props) {
    super(props);
    this.state = {
      Prices: [
        { FinalPrice: '$499' },
        { ReservedPrice: '$114' },
        { RemainingPrice: '$335' }
      ],
      loader: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loader: false });
    }, 3000);
    console.log(this.context.totalPrice);
    this.setState(() => {
      return {
        Prices: [
          { FinalPrice: '$' + this.context.totalPrice.toFixed(2) },
          {
            ReservedPrice:
              '$' + ((25 / 100) * this.context.totalPrice).toFixed(2)
          },
          {
            RemainingPrice:
              '$' +
              (
                this.context.totalPrice -
                (25 / 100) * this.context.totalPrice
              ).toFixed(2)
          }
        ]
      };
    });
  }

  render() {
    const { classes } = this.props;
    const { className, onSidebarOpen } = this.props;
    let loader = null;
    if (this.state.loader) {
      loader = (
        <div
          style={{
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            width: '100%'
          }}>
          <Grid container xs={12}>
            <Grid className={classes.Loader} item xs={12} sm={4} lg={4}>
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
            </Grid>
            <Grid item xs={12} sm={8} lg={8}>
              <Typography className={classes.Heading}>
                Calculating the cost of your move
              </Typography>
            </Grid>
          </Grid>
        </div>
      );
    } else {
      loader = (
        <Grid
          container
          xs={12}
          className={classes.MainContainerWrapper}
          style={{}}>
          <Grid
            item
            xs={12}
            align="left"
            className={classes.HeadWrapper}
            style={{}}>
            <Typography className={classes.SubHeading}>
              Based on your moving list the total for your move is:
            </Typography>
          </Grid>

          <Grid
            container
            xs={12}
            justify="space-evenly"
            style={{ paddingTop: '4vh' }}>
            <Grid
              container
              xs={12}
              sm={3}
              lg={3}
              justify="center"
              className={classes.WhiteGrid}>
              <div className={classes.WhiteBackground}>
                {this.state.Prices.map((Price) => (
                  <Grid
                    container
                    direction="column"
                    xs={12}
                    alignItems="center"
                    justify="space-evenly"
                    className={classes.PriceWrapper1}
                    style={{}}>
                    <Grid item>
                      <Typography className={classes.Price}>
                        {Price.FinalPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </div>

              <Grid
                item
                xs={12}
                className={classes.UnderPriceWrapper}
                style={{}}>
                <Typography className={classes.UnderPrice}>
                  Lock this price NOW
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              xs={12}
              sm={3}
              lg={3}
              justify="center"
              className={[classes.WhiteGrid, classes.MiddleBoxWrapper].join(
                ' '
              )}>
              <div className={classes.WhiteBackground}>
                {this.state.Prices.map((Price) => (
                  <Grid
                    container
                    direction="column"
                    xs={12}
                    alignItems="center"
                    justify="space-evenly"
                    className={classes.PriceWrapper2}
                    style={{}}>
                    <Grid item>
                      <Typography className={classes.Price}>
                        {Price.ReservedPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </div>
              <Grid item xs={12} className={classes.UnderPriceWrapper}>
                <Typography className={classes.UnderPrice} style={{}}>
                  Reserve Now with only 25%
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              sm={3}
              lg={3}
              justify="center"
              className={classes.WhiteGrid}>
              <Grid container justify="left" xs={12}>
                <div className={classes.WhiteBackground}>
                  {this.state.Prices.map((Price) => (
                    <Grid
                      container
                      direction="column"
                      xs={12}
                      alignItems="center"
                      justify="space-evenly"
                      className={classes.PriceWrapper3}
                      style={{}}>
                      <Grid item>
                        <Typography className={classes.Price}>
                          {Price.RemainingPrice}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </div>
                <Grid
                  item
                  xs={12}
                  className={classes.UnderPriceWrapper}
                  style={{ marginLeft: '6vh' }}>
                  <Typography
                    className={classes.UnderPrice}
                    className={[classes.UnderPrice, classes.SC].join(' ')}
                    style={{}}>
                    Remaining balance after
                    <br /> moving is completed
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              sm={3}
              lg={3}
              justify="center"
              alignContent="center">
              <Grid
                container
                justify="center"
                xs={12}
                style={{ paddingTop: '2.5vh' }}>
                <Button
                  onClick={this.context.gotToFinalStepPage}
                  className={classes.Button}
                  variant="contained"
                  color="primary">
                  Book NOW
                </Button>
              </Grid>
              <Grid
                container
                justify="center"
                style={{ paddingTop: '2vh', paddingBottom: '2vh' }}
                xs={12}>
                <Typography className={classes.SmallerBtnContent}>
                  Get an EXTRA 5% Off
                </Typography>
              </Grid>
              <Grid
                container
                justify="center"
                xs={12}
                className={classes.SABL}
                style={{}}>
                <Button
                  onClick={this.context.saveAndBookLaterHandler}
                  className={classes.largerBtn}
                  variant="contained"
                  color="primary">
                  Save and Book later
                </Button>
              </Grid>
              <Grid
                container
                justify="center"
                xs={12}
                style={{ paddingTop: '2vh' }}>
                <Typography className={classes.largerBtnContent}>
                  Save your info and book later
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              className={classes.CheckListWrapper}
              style={{}}>
              <Grid
                item
                xs={2}
                sm={1}
                align="right"
                style={{ paddingRight: '1vh' }}>
                <CheckIcon className={classes.CheckListIcon} />
              </Grid>
              <Grid item xs={10} sm={11} align="left">
                <Typography className={classes.CheckList}>
                  BOOK NOW! with only 25% of the total
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sm={1}
                align="right"
                style={{ paddingRight: '1vh' }}>
                <CheckIcon className={classes.CheckListIcon} />
              </Grid>
              <Grid item xs={10} sm={11} align="left">
                <Typography className={classes.CheckList}>
                  Our system will find a company to make your move
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sm={1}
                align="right"
                style={{ paddingRight: '1vh' }}>
                <CheckIcon className={classes.CheckListIcon} />
              </Grid>
              <Grid item xs={10} sm={11} align="left">
                <Typography className={classes.CheckList}>
                  You will receive an email with up to 5 moving companies ready
                  to make your move
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sm={1}
                align="right"
                style={{ paddingRight: '1vh' }}>
                <CheckIcon className={classes.CheckListIcon} />
              </Grid>
              <Grid item xs={10} sm={11} align="left">
                <Typography className={classes.CheckList}>
                  Once you have received the email just select one company from
                  the list{' '}
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sm={1}
                align="right"
                style={{ paddingRight: '1vh' }}>
                <CheckIcon className={classes.CheckListIcon} />
              </Grid>
              <Grid
                item
                xs={10}
                sm={11}
                align-self="center"
                align="left"
                justify="center">
                <Typography className={classes.CheckList}>
                  The moving company will contact you for final details
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    }
    return (
      <Grid container xs={12} align="center" justifyContent="center">
        {this.context.loader ? (
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
        {loader}
        {this.context.errorMsg ? (
          <ErrorModal msg={this.context.errorMsg} />
        ) : null}
      </Grid>
    );
  }
}
FinalCostPage.propTypes = {
  className: PropTypes.string
};

export default withStyles(styles)(FinalCostPage);
