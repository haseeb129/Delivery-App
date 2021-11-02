import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { withRouter, Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import { Typography, Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { TopBarMenu } from '../../../../components';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    background: '#F2E161',
    backgroundSize: '90% 95%',
    borderTop: '1px solid transparent',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    '@media(max-width: 787px)': {
      //   display: 'block',
      overflow: 'scroll',
      backgroundImage: 'none',
      background: '#F2E161'
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
    margin: '0 1rem',
    '& h1': {
      fontSize: '3rem',
      fontWeight: '400',
      margin: 0
    },
    '& p': {
      color: '#77724a',
      letterSpacing: '.6rem',
      fontSize: '26px'
    },
    '@media(max-width: 787px)': {
      // display: 'none'
      textAlign: 'center',
      margin: 0,
      // paddingTop: '60px',
      '& h1': {
        fontWeight: '400',
        fontSize: '2rem'
      },
      '& p': {
        letterSpacing: '.3rem',
        margin: 0
      }
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& h4': {
      fontSize: '20px',
      letterSpacing: '.3rem'
    },
    '@media (max-width:600px)': {
      //alignItems: 'flex-start',
      justifyContent: 'flex-end'
    }
  },
  MembersBtn: {
    textAlign: 'center',
    '& button': {
      background: '#3bb5fb',
      color: '#fff'
    }
  },
  MembersBtnMobile: {
    display: 'none',
    textAlign: 'center',
    '& button': {
      background: '#3bb5fb',
      color: '#fff'
    },
    '& h4': {
      fontSize: '2rem',
      fontWeight: 400
    },
    '@media (max-width:786px)': {
      display: 'block',
      margin: '2rem 0',
      '& button': {
        width: '50%',
        fontSize: '1.2rem'
      }
    }
  },
  question2: {
    display: 'none',
    '@media (max-width:786px)': {
      display: 'block'
    }
  },
  pQuestion: {
    color: 'rgb(25, 34, 31)',
    fontSize: '24px',
    fontWeight: 'bold',
    '& a': {
      color: 'rgb(25, 34, 31)',
      fontSize: '26px',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    '@media (max-width:600px)': {
      fontSize: '20px',
      lineHeight: '14px',
      margin: '2rem',
      // marginLeft: '0.5rem',
      marginBottom: '1vh',
      bottom: '65px',
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
    fontWeight: 300,
    '@media(max-width: 787px)': {
      width: '80%',
      fontSize: '1.3rem',
      lineHeight: '1.5rem'
    }
  },
  Type: {
    margin: '.5rem 0',
    '@media(max-width: 787px)': {
      display: 'flex'
    }
  },

  stamp: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    '& img': {
      width: '120px'
    }
  },
  FooterLink: {
    fontSize: '14px',
    color: '#77724a',
    textAlign: 'center'
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
      padding: '0'
    }
  },
  Deposit: {
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'inline-block',
    margin: '.5rem 0',
    '@media (max-width:786px)': {
      color: '#867f4d',
      textAlign: 'center',
      margin: '0'
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
        width: '60%'
      }
    }
  },
  MenuIcon: {
    display: 'none',
    flexGrow: 1,
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
  MobilFooter: {},
  MobileDeposit: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem'
  },
  MainContent: {
    margin: '1rem 0',
    '& h3': {
      padding: '0 2rem',
      letterSpacing: '0.8rem',
      fontSize: '2.5rem',
      '@media (max-width:786px)': {
        textAlign: 'center',
        letterSpacing: '0rem',
        fontSize: '1.5rem',
        fontWeight: 400
      }
    },
    '@media (max-width:786px)': {
      margin: '0rem'
    }
  },
  BenefitsHeading: {
    margin: '0 1rem',
    '& h4': {
      letterSpacing: '.5rem'
    },
    '@media (max-width:786px)': {
      display: 'none'
    }
  },
  Benifits: {
    background: '#E4DCA6',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem ',
    '@media (max-width:786px)': {
      background: 'none',
      flexDirection: 'column',
      padding: '1rem 2rem '
    }
  },
  Benifit: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '@media (max-width:786px)': {
      width: '100%',
      margin: '.50rem 1rem'
    }
  },
  BenifitsChecks: {
    padding: '1rem',
    '@media (max-width:786px)': {
      display: 'none'
    }
  },
  BenifitCheck: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '.5rem'
  },
  Check: {
    flex: '.06',
    '& svg': {
      fontSize: '44px'
    }
  },
  CheckText: {
    fontSize: '26px',
    fontWeight: '300'
  },
  MobileHeading: {
    '& h1': {
      fontWeight: '400'
    },
    '& p': {
      color: '#77724a',
      letterSpacing: '.6rem'
    },
    display: 'none',
    '@media(max-width: 787px)': {
      display: 'block',
      textAlign: 'center',
      paddingTop: '60px',
      '& h1': {
        fontWeight: '400',
        fontSize: '2rem'
      },
      '& p': {
        letterSpacing: '.3rem'
      }
    }
  },
  QuestionMobile: {
    display: 'none',
    '@media(max-width: 787px)': {
      display: 'block'
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
  QuestionMid: {
    '& makeStyles-Question': {
      '@media (max-width: 400px)': {
        justifyContent: 'center',
        textAlign: 'center'
      }
    }
  }
}));
function Page2() {
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
          <h1>Be part of our network</h1>
          <p className={classes.subHeading}>Are you moving company ?</p>
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
            <div className={classes.MembersBtn}>
              <h4>Become a member</h4>
              <Button>Click Here</Button>
            </div>
          </div>
        </div> */}
      </div>

      <div className={classes.MainContent}>
        {/* <div className={classes.MobileHeading}>
          <h1>Be part of our network</h1>
          <p className={classes.subHeading}>Are you moving company ?</p>
        </div> */}
        <div className={classes.heading}>
          <h1 style={{ justifyContent: 'center' }}>Be part of our network</h1>
          <p className={classes.subHeading}>Are you a moving company ?</p>
        </div>
        <div className={classes.BenefitsHeading}>
          <h4>Benefits and more</h4>
        </div>
        <div className={classes.Benifits}>
          <div className={classes.Benifit}>
            <div className={classes.Point}>1</div>
            <div className={classes.PointText}>Free Membership</div>
          </div>
          <div className={classes.Benifit}>
            <div className={classes.Point}>2</div>
            <div className={classes.PointText}>Real leads</div>
          </div>
          <div className={classes.Benifit}>
            <div className={classes.Point}>3</div>
            <div className={classes.PointText}>Income growth</div>
          </div>
          <div className={classes.Benifit}>
            <div className={classes.Point}>4</div>
            <div className={classes.PointText}>Advertising Included</div>
          </div>
        </div>

        <div className={classes.BenifitsChecks}>
          <div className={classes.BenifitCheck}>
            <div className={classes.Check}>
              <CheckIcon />
            </div>
            <div className={classes.CheckText}>
              Your company never pays for being on the network
            </div>
          </div>
          <div className={classes.BenifitCheck}>
            <div className={classes.Check}>
              <CheckIcon />
            </div>
            <div className={classes.CheckText}>
              All our leads are real lead customer ready to move
            </div>
          </div>
          <div className={classes.BenifitCheck}>
            <div className={classes.Check}>
              <CheckIcon />
            </div>
            <div className={classes.CheckText}>
              Increase your Monthly Income With more and better customers
            </div>
          </div>
          <div className={classes.BenifitCheck}>
            <div className={classes.Check}>
              <CheckIcon />
            </div>
            <div className={classes.CheckText}>
              Take advantage of our Powerful Promotional Presense
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ marginLeft: '12%' }}> */}
      <div className="QuestionMid">
        <div className={classes.MobileFooter}>
          <div className={classes.MembersBtnMobile}>
            <h4>Become a member</h4>
            <Button>Click Here</Button>
          </div>
          <div className={classes.question2}>
            <div className={classes.Question}>
              <Typography className={classes.pQuestion}>
                <span className={classes.PhoneIcon}>
                  <PhoneIcon />
                </span>{' '}
                {/* <div className={classes.CFWD}>
                <CarouselFooter />
              </div> */}
                <a href="+17879558832">Questions? Call us at 787-955-8832</a>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Page2.propTypes = {
  children: PropTypes.node
};

export default withRouter(Page2);
