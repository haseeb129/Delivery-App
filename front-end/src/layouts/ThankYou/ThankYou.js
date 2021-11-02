import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import thankyou from '../../assets/thank-you-bg.png';
import thankyoubg from '../../assets/thankyou-bg.png';
// import { Sidebar, Topbar, Footer } from './components';

import { TopBarMenu, Footer } from '../../components';
import '../../App.css';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${thankyoubg})`,
    height: '100vh',
    backgroundPosition: '10% 102%',
    backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 102%',
    '@media(max-width: 787px)': {
      overflow: 'scroll',
      backgroundSize: '200% 100%',
      backgroundImage: 'none',
      background: '#F2E161'
    }
  }
}));

const ThankYou = props => {
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

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

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

        <Footer help={true} style={{}} />
      </main>
    </div>
  );
};

ThankYou.propTypes = {
  children: PropTypes.node
};

export default ThankYou;
