import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import BG from '../../assets/bg.png';
// import { Sidebar, Topbar, Footer } from './components';

import { TopBarMenu, Footer } from '../../components';
import '../../App.css';
const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${BG})`,
    height: '100vh',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',

    backgroundSize: 'cover',

    '@media(max-width: 787px)': {
      height: '100vh',
      overflow: 'scroll',
      backgroundImage: 'none',
      background: '#F2E161'
    }
  },
  FooterContent: {
    marginTop: '20vh',
    zIndex: '10',
    paddingTop: '15vh',
    '@media(max-width: 787px)': {
      marginTop: '2vh',
      paddingTop: '2vh'
    }
  }
}));

const Main1 = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };



  return (
    <div
      style={{}}
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}>
      <TopBarMenu onSidebarOpen={handleSidebarOpen} />
      <main className={classes.content} style={{}}>
        {children}

        {/* <Footer className={classes.FooterContent} style={{}} /> */}
        <Footer />
      </main>
    </div>
  );
};

Main1.propTypes = {
  children: PropTypes.node
};

export default Main1;
