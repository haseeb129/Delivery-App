import React, { forwardRef } from 'react';

import { makeStyles } from '@material-ui/styles';
import Stamp from '../../../../assets/stamp-2.png';
import PhoneIcon from '@material-ui/icons/Phone';
import { Typography, Button } from '@material-ui/core';
import { TopBarMenu } from '../../../../components';

import { Link } from 'react-router-dom';
import Footer from '../../../../layouts/Help/components/Footer/Footer';

const useStyles = makeStyles(() => ({
  root: {
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
      //   display: 'block',
      overflow: 'scroll',
      backgroundImage: 'none',
      background: '#F2E161'
    }
  },
  // headerContainer: {
  //   display: 'flex',
  //   margin: '1rem 2rem',
  //   '@media(max-width: 787px)': {
  //     margin: '1rem',
  //     marginBottom: '.5rem'
  //   }
  // },
  headingImage: {
    flex: 1,
    '& img': {
      width: '50%'
    },
    '@media (max-width:786px)': {
      flexGrow: 1,
      '& img': {
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
  BookNow: {
    display: 'none',
    padding: '1rem 0',
    '@media (max-width:787px)': {
      display: 'block',
      margin: '2rem 0'
    }
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
  MenuIcon: {
    display: 'none',
    flexGrow: 1,
    textAlign: 'right',
    '@media (max-width:786px)': {
      display: 'block'
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    '& h4': {
      fontSize: '16px',
      letterSpacing: '.3rem'
    },
    '@media (max-width:600px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
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
      margin: '0 4vh',
      marginBottom: '1vh',
      '& a': {
        color: 'rgb(25, 34, 31)',
        fontSize: '16px',
        margin: '0rem',
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
    fontWeight: '300',
    '@media(max-width: 787px)': {
      width: '80%',
      fontSize: '1.3rem',
      lineHeight: '1.5rem'
    }
  },
  Type: {
    margin: '.5rem 0',
    display: 'flex',
    alignItems: 'flex-start',
    '@media(max-width: 787px)': {
      display: 'flex'
    }
  },
  Heading: {
    padding: '0 1rem',
    '& h2': {
      fontWeight: '400',
      letterSpacing: '.8rem',
      fontSize: '3rem',
      '@media(max-width: 787px)': {
        letterSpacing: '0rem',
        textAlign: 'center',
        fontWeight: 400,
        fontSize: '2rem'
      }
    },
    '& p': {
      fontWeight: '200',
      letterSpacing: '.6rem',
      margin: '0',
      '@media(max-width: 787px)': {
        letterSpacing: '.1rem',
        textAlign: 'center',
        fontSize: '1rem',
        margin: '.5rem 0',
        marginBottom: '1rem'
      }
    }
  },
  QuestionMobile: {
    display: 'none',
    '@media(max-width: 787px)': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  Desc: {
    padding: '1rem',
    fontSize: '14px',
    paddingTop: 0,
    marginTop: '-1rem',
    '@media(max-width: 787px)': {
      display: 'none'
    }
  },
  DeskMobile: {
    padding: '.5rem',
    textAlign: 'center',
    fontSize: '14px',
    display: 'none',
    '@media(max-width: 787px)': {
      display: 'block'
    }
  },
  StampImg: {
    width: '92%',
    '@media(max-width: 787px)': {
      display: 'none'
    }
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1, textAlign: 'center' }}>
    <Link {...props} />
  </div>
));
function Page3() {
  const classes = useStyles();
  const [] = React.useState(false);
  const [, setOpenSidebar] = React.useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };
  return (
    <div className={classes.root}>
      <div className={classes.TopBarMenu}>
        <TopBarMenu onSidebarOpen={handleSidebarOpen} />
      </div>
      <div className={classes.headerContainer}>
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

      <div className={classes.MainContent}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className={classes.Heading}>
                <h2>Deposit Risk Free</h2>
                <p>Reasons for a full deposit refund</p>
              </div>
              <div className={classes.Main}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-lg-12">
                      <div className={classes.Type}>
                        <span className={classes.Point}>1</span>
                        <span className={classes.PointText}>
                          Moving company does not show without any reason
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12">
                      <div className={classes.Type}>
                        <span className={classes.Point}>2</span>
                        <span className={classes.PointText}>
                          Moving cancelation 72 hours prior to moving date
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12">
                      <div className={classes.Type}>
                        <span className={classes.Point}>3</span>
                        <span className={classes.PointText}>
                          More than 1 change on the moving date from the moving
                          company
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12">
                      <div className={classes.Type}>
                        <span className={classes.Point}>4</span>
                        <span className={classes.PointText}>
                          Any violation of the moversconnections policies
                          concerning moving companies.
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
            </div>
            <div className="col-lg-4">
              <img className={classes.StampImg} src={Stamp} alt="stamp" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.BookNow}>
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

      <div className={classes.MobileFooter}>
        <div className={classes.QuestionMobile}>
          <div className={classes.Question}>
            <Typography className={classes.pQuestion}>
              <span className={classes.PhoneIcon}>
                <PhoneIcon />
              </span>{' '}
              <a href="tel:+17879558832">Questions? Call us at 787-955-8832</a>
            </Typography>
          </div>
        </div>
        <div className={classes.DeskMobile}>
          *For more details visit our desktop version
        </div>
        <div className={classes.Desc}>
          *All the refund reasons above must be supported with evidence, in
          every case moversconnections will conduct an investigation within{' '}
          <br />
          48 hours from the moment the request is received. For more information
          related to our Deposit Risk Free policy to report any <br />
          situation, please contact us @ moversconnections@gmail.com or call us
          @ 787-955-8832
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Page3;
