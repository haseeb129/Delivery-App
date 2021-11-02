import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import hww from '../../../../assets/hww-2.png';
import { withRouter, Link, NavLink as RouterLink } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import { Typography, Button } from '@material-ui/core';
import Stamp from '../../../../assets/stamp.png';
import { TopBarMenu } from '../../../../components';
import Footer from '../../../../layouts/Help/components/Footer/Footer';
const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${hww})`,
    height: '100vh',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    background: '#F2E161',
    backgroundSize: '90% 95%',
    borderTop: '1px solid transparent',
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media(max-width: 787px)': {
      // display: 'flex',
      overflow: 'scroll',
      backgroundImage: 'none',
      background: '#F2E161'
    }
  },
  Main: {
    margin: '2rem 0 .51rem 0',
    '@media(max-width: 787px)': {
      margin: 0
    }
  },
  // headerContainer: {
  //   display: 'flex',
  //   margin: '2rem',
  //   '@media(max-width: 787px)': {
  //     margin: '1rem',
  //     marginBottom: '.5rem'
  //   }
  // },
  heading: {
    flexGrow: '1',
    '& h1': {
      fontWeight: '400',
      fontSize: '2rem',
      margin: '0'
    },
    '@media(max-width: 787px)': {
      textAlign: 'center',
      marginBottom: '30px'
      // display: 'none',
    }
  },
  HeadingBottom: {
    display: 'none',
    margin: '1rem 0',
    fontWeight: 400,
    '@media(max-width: 787px)': {
      textAlign: 'center',
      display: 'block',
      fontSize: '2rem',
      margin: '0',
      marginBottom: '1rem'
    }
  },
  question: {
    flexGrow: '1',
    '@media(max-width: 787px)': {
      display: 'none'
    }
  },
  Question: {
    // padding: '1rem 0',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '@media (max-width:600px)': {
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto'
    }
  },
  pQuestion: {
    color: 'rgb(25, 34, 31)',
    fontSize: '24px',
    fontWeight: 'bold',
    '& a': {
      color: 'rgb(25, 34, 31)',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    '@media (max-width:600px)': {
      fontSize: '20px',
      lineHeight: '14px',
      margin: '.5rem 4vh',
      // marginLeft: '-30px',
      marginBottom: '1vh',
      '& a': {
        color: 'rgb(25, 34, 31)',
        margin: '0rem',
        fontSize: '16px',
        '&:hover': {
          textDecoration: 'none'
        }
      }
    }
  },
  PhoneIcon: {
    display: 'inline-block',
    background: '#3bb5fb',
    // color: '#f2e161',
    color: '#fff',
    padding: '.2rem',
    borderRadius: '50%',
    '& svg': {
      fontSize: '2.5rem'
    },
    '@media(max-width: 787px)': {
      '& svg': {
        fontSize: '1.5rem'
      }
    }
  },
  Point: {
    display: 'inline-flex',
    width: '40px',
    height: '40px',
    background: '#3bb5fb',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    marginRight: '.5rem',
    '@media(max-width: 787px)': {
      // width: '10%',
      width: '35px',
      height: '35px',
      fontSize: '1.2rem'
    }
  },
  PointText: {
    fontSize: '26px',
    fontWeight: 300,
    '@media(max-width: 787px)': {
      width: '80%',
      fontSize: '1.3rem',
      lineHeight: '1.5rem'
    }
  },
  Type: {
    margin: '.3rem 0',
    '@media(max-width: 787px)': {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      margin: '.3rem 0'
    }
  },

  stamp: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    '& img': {
      // width: '120px',
      width: '90%'
    }
  },
  FooterLink: {
    fontSize: '14px',
    color: '#77724a',
    textAlign: 'center',
    padding: '.5rem'
  },
  Button: {
    width: '35vh',
    height: '7vh',
    fontSize: '20px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF',
      color: 'white'
    },
    '@media (max-width:1000px)': {
      margin: '10px 0px',
      width: '25vh',
      fontSize: '18px'
    },

    '@media (max-width:1000px)': {
      margin: '10px 0px',
      fontSize: '14px'
    }
  },
  booknowWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0',
    '@media (max-width:1000px)': {
      padding: '0rem'
    }
  },
  Deposit: {
    fontSize: '26px',
    fontWeight: 'bold',
    display: 'inline-block',
    margin: '.5rem 0',
    '@media (max-width:786px)': {
      color: '#867f4d',
      textAlign: 'center',
      margin: '0',
      fontSize: '16px',
      padding: '.5rem'
    }
  },
  footer: {
    display: 'flex',
    '@media (max-width:786px)': {
      display: 'none'
    }
  },
  headingImage: {
    display: 'none',
    '@media (max-width:786px)': {
      display: 'block',
      flexGrow: 1,
      '& img': {
        // width: '60%'
        width: '180px'
      }
    }
  },
  DOT: {
    display: 'inline-block',
    padding: '.4rem',
    background: '#3bb5fb',
    borderRadius: '50%',
    margin: '0 .4rem',
    lineHeight: '1rem'
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
  MenuIcon: {
    display: 'none',
    flexGrow: 1,
    textAlign: 'right',
    '@media (max-width:786px)': {
      display: 'block'
    }
  },
  footerMobile: {
    display: 'none',

    '@media (max-width:786px)': {
      display: 'block'
    }
  },
  MobileDeposit: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    '@media(max-width: 787px)': {
      padding: '0rem',
      display: "none"
    }
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
  <div ref={ref} style={{ flexGrow: 1, textAlign: 'center' }}>
    <Link {...props} />
  </div>
));
function Page1() {
  const classes = useStyles();
  const [] = React.useState(false);
  const [, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.TopBarMenu}>
        <TopBarMenu onSidebarOpen={handleSidebarOpen} />
      </div>
      <div className={classes.headerContainer}>
        {/* <div className={classes.heading}>
          <h1>How We Work</h1>
        </div> */}
        {/* <div className={classes.headingImage}>
          <Link to="/">
            <img
              src={require('../../../../assets/logotest.png')}
              className={classes.LogoImg}
            />
          </Link>
        </div> */}
        {/* <div className={classes.MenuIcon}>
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
              </ul>
            </div>
          )}
        </div> */}
        {/* <div className={classes.question}>
          <div className={classes.Question}>
            <Typography className={classes.pQuestion}>
              <span className={classes.PhoneIcon}>
                <PhoneIcon />
              </span>{' '}
              <a href="tel:+17879558832">Questions? Call us at 787-955-8832</a>
            </Typography>
          </div>
        </div> */}
      </div>

      <div className={classes.Main}>
        <div className="container-fluid">
          {/* <h3 className={classes.HeadingBottom}>How We Work</h3> */}
          <div className={classes.heading}>
            <h1>How We Work</h1>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className={classes.Type}>
                <span className={classes.Point}>1</span>
                <span className={classes.PointText}>
                  Choose the type of move
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-12">
              <div className={classes.Type}>
                <span className={classes.Point}>2</span>
                <span className={classes.PointText}>
                  Give us the details of the move
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-12">
              <div className={classes.Type}>
                <span className={classes.Point}>3</span>
                <span className={classes.PointText}>
                  We will find the Best Price among our network of moving
                  companies
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-12">
              <div className={classes.Type}>
                <span className={classes.Point}>4</span>
                <span className={classes.PointText}>
                  Book your move with just a 25% deposit 100% risk-free*
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-12">
              <div className={classes.Type}>
                <span className={classes.Point}>5</span>
                <span className={classes.PointText}>
                  Pay the rest of the move once it has been completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <div className={classes.stamp}>
          <img src={Stamp} alt="stamp" />
          <RouterLink
            className={classes.FooterLink}
            to={{ pathname: '/help', page: 'page3' }}>
            Click For More Details
          </RouterLink>
        </div>
        <div className={classes.booknowWrapper}>
          <div className={classes.BookNow}>
            <br />
            <Button
              activeClassName={classes.active}
              className={classes.Button}
              component={CustomRouterLink}
              // to={page.href}
              to="/booknow"
              variant="contained"
              color="primary">
              Book Now
            </Button>
          </div>
          <span className={classes.Deposit}>
            * 100% Deposit Risk-Free with our Waranty Seal
          </span>
        </div>
      </div>
      <Footer />
      <div className={classes.footerMobile}>
        <div className={classes.booknowWrapper}>
          <div className={classes.BookNow} style={{ paddingTop: "50px", paddingBottom: '50px' }}>
            <Button
              activeClassName={classes.active}
              className={classes.Button}
              component={CustomRouterLink}
              // to={page.href}
              to="/booknow"
              variant="contained"
              color="primary">
              Book Now
            </Button>
          </div>

          <div className={classes.question2}>
            <div className={classes.Question}>
              <Typography className={classes.pQuestion}>
                <span className={classes.PhoneIcon}>
                  <PhoneIcon />
                </span>{' '}
                <a href="tel:+17879558832">
                  Questions? Call us at 787-955-8832
                </a>
              </Typography>
            </div>
          </div>
          <div className={classes.MobileDeposit}>
            <RouterLink
              className={classes.FooterLink}
              to={{ pathname: '/help', page: 'page3' }}>
              Click For More Details
            </RouterLink>
            <span className={classes.Deposit}>
              * 100% Deposit Risk-Free with our Waranty Seal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Page1.propTypes = {
  children: PropTypes.node
};

export default withRouter(Page1);
