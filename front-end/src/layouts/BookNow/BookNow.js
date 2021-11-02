import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

// import { Topbar, Footer } from './components';
import { TopBarMenu, Footer } from '../../components';
import backgroundMinimal from '../../assets/backgroundminimal.png';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    backgroundImage: `url(${backgroundMinimal})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '@media(max-width: 787px)': {
      overflow: 'scroll',
      backgroundImage: 'none',
      background: '#F2E161'
    }
  },
  content: {
    // height: '100%',
    '@media (max-width:787px)': {
      height: 'auto'
    }
  }
}));

const BookNow = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root} style={{}}>
      <TopBarMenu />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  );
};

BookNow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default BookNow;
