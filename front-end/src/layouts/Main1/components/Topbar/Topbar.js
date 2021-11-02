import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import Grid from '@material-ui/core/Grid';
import '../../../../App.css';
import PropTypes from 'prop-types';
import PhoneIcon from '@material-ui/icons/Phone';
import { NavLink as RouterLink } from 'react-router-dom';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  Button: {
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF',
      color: 'white'
    },
    width: '25vh',
    color: 'white',
    borderRadius: '25px',
    '@media (max-width:800px)': {
      width: '16vh',
      fontSize: '12px'
    }
  },
  logo: {
    // marginTop: '-15vh',
    // '@media (max-width:800px)': {
    //   marginTop: '-8vh',
    // },
    // '@media (max-width:600px)': {
    //   marginTop: '-10vh',
    // },
  },
  Question: {
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
      fontSize: '12px',
      lineHeight: '14px',
      margin: '0 4vh',
      marginBottom: '1vh'
    }
  },
  LogoImg: {
    width: '250px',
    '@media (max-width:787px)': {
      width: '180px'
    }
  },
  PhoneIcon: {
    display: 'inline-block',
    background: '#3bb5fb',
    color: '#f2e161',
    padding: '.2rem',
    borderRadius: '50%'
  },
  QuestionDispaly: {
    display: 'none'
  },
  TOpMenusIcon: {
    '@media (min-width:787px)': {
      display: 'none'
    },
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // padding: '1rem',
    color: '#3bb5fb',
    '& button': {
      display: 'flex',
      alignItems: 'end'
    },
    '& svg': {
      fontSize: '2rem'
    }
  },
  TopMenus: {
    width: '100%',
    textAlign: 'right',
    '& li': {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 .5rem',
      fontSize: '16px',
      fontWeight: 'lighter',
      cursor: 'pointer'
    },
    '@media (max-width:787px)': {
      display: 'none'
    }
  },
  DOT: {
    display: 'inline-block',
    // padding: '.4rem',
    background: '#3bb5fb',
    borderRadius: '50%',
    margin: '0 .4rem',
    lineHeight: '1rem',
    width: '1.5rem',
    height: '1.5rem',
    marginLeft: 0,
    '@media (max-width:787px)': {
      width: '1rem',
      height: '1rem'
    }
  },
  MENU: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 999999999999,
    background: '#2f2c2ced',
    color: '#fff'
  },
  MenuList: {
    padding: '1rem',
    listStyle: 'none',
    textAlign: 'left'
  },
  MenuItem: {
    margin: '1rem 0',
    '& a': {
      color: '#fff',
      fontSize: '26px',
      padding: '1rem'
    }
  },
  Cancel: {
    padding: '1rem',
    textAlign: 'right'
  }
}));
const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));
const pages = [
  {
    title: 'book now',
    href: '/booknow'
  }
];

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const mouse = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext');
    el.style.color = white;
  };
  const mouse1 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext1');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout1 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext1');
    el.style.color = white;
  };

  const mouse2 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext2');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout2 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext2');
    el.style.color = white;
  };

  const mouse3 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext3');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout3 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext3');
    el.style.color = white;
  };
  const NavBarHome = ['Home'];
  const NavBar = [
    'Moving Companies',
    'Long Distance Moving',
    'Moving Reviews',
    'Moving Quotes',
    'Moving Truck Rental'
  ];
  const classes = useStyles();
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container xs={12} style={{ height: '17vh' }}>
        <Grid container xs={12} style={{ marginTop: '2vh' }} align="center">
          <Grid item xs={0} style={{ marginTop: '.8vh' }} />
          <Grid item xs={6} sm={2} lg={2} className={classes.logo}>
            <RouterLink to="/">
              <img
                src={require('../../../../assets/logotest.png')}
                className={classes.LogoImg}
              />
            </RouterLink>
          </Grid>
          <Grid item xs={0} sm={3} lg={3} />
          <Grid
            container
            xs={6}
            sm={7}
            lg={7}
            align="center"
            style={{ marginTop: '0vh' }}>
            <Grid container xs={12} align="center">
              <ul className={classes.TopMenus}>
                <li>
                  <span className={classes.DOT}></span>
                  <RouterLink
                    style={{
                      fontSize: '1.2rem',
                      textDecoration: 'none',
                      color: '#000'
                    }}
                    to={{ pathname: '/help', page: 'page1' }}>
                    How we work
                  </RouterLink>
                </li>
                <li>
                  <span className={classes.DOT}></span>
                  <RouterLink
                    style={{
                      fontSize: '1.2rem',
                      textDecoration: 'none',
                      color: '#000'
                    }}
                    to={{ pathname: '/help', page: 'page2' }}>
                    Be part of out network
                  </RouterLink>
                </li>
                <li>
                  <span className={classes.DOT}></span>
                  <RouterLink
                    style={{
                      fontSize: '1.2rem',
                      textDecoration: 'none',
                      color: '#000'
                    }}
                    to={{ pathname: '/help', page: 'page3' }}>
                    Deposit risk free
                  </RouterLink>
                </li>
                <li>
                  <span className={classes.DOT}></span>
                  <RouterLink
                    style={{
                      fontSize: '1.2rem',
                      textDecoration: 'none',
                      color: '#000'
                    }}
                    to={{ pathname: '/help', page: 'page3' }}>
                    Language
                  </RouterLink>
                </li>
              </ul>
              <div className={classes.TOpMenusIcon}>
                <IconButton onClick={() => setShowMenu(!showMenu)}>
                  <MenuIcon style={{ fontSize: '2.5rem', color: '#3bb5fb' }} />
                </IconButton>
                {showMenu && (
                  <div className={classes.MENU}>
                    <div
                      onClick={() => setShowMenu(!showMenu)}
                      className={classes.Cancel}>
                      <CancelIcon />
                    </div>
                    <ul className={classes.MenuList}>
                      <li className={classes.MenuItem}>
                        <span className={classes.DOT}></span>
                        <RouterLink
                          style={{ textDecoration: 'none' }}
                          to={{ pathname: '/help', page: 'page1' }}>
                          How we work
                        </RouterLink>
                      </li>
                      <li className={classes.MenuItem}>
                        <span className={classes.DOT}></span>
                        <RouterLink
                          style={{ textDecoration: 'none' }}
                          to={{ pathname: '/help', page: 'page2' }}>
                          Be part of out network
                        </RouterLink>
                      </li>
                      <li className={classes.MenuItem}>
                        <span className={classes.DOT}></span>
                        <RouterLink
                          style={{ textDecoration: 'none' }}
                          to={{ pathname: '/help', page: 'page3' }}>
                          Deposit risk free
                        </RouterLink>
                      </li>
                      <li className={classes.MenuItem}>
                        <span className={classes.DOT}></span>
                        <RouterLink
                          style={{ textDecoration: 'none' }}
                          to={{ pathname: '/help', page: 'page3' }}>
                          Language
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className={classes.QuestionDispaly}>
                <Grid item xs={12}>
                  <Typography className={classes.Question}>
                    <span className={classes.PhoneIcon}>
                      <PhoneIcon />
                    </span>{' '}
                    <a href="tel:+17879558832">
                      Questions? Call us at 787-955-8832
                    </a>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {pages.map(page => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      style={{ paddingBottom: '12vh' }}>
                      <Button
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
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
