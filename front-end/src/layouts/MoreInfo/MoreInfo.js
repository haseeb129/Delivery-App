import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import moreinfo from '../../assets/moreinfo-man-flip.png';
// import { Sidebar, Topbar, Footer } from './components';

import { TopBarMenu, Footer } from '../../components';
import '../../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${moreinfo})`,
    height: '100vh',
    backgroundPosition: 'bottom left',
    backgroundRepeat: 'no-repeat',
    // backgroundSize: '45%',
    '@media(max-width: 787px)': {
      overflow: 'scroll',
      backgroundImage: 'none',
      background: '#F2E161'
    }
  }
}));

const MoreInfo = props => {
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

MoreInfo.propTypes = {
  children: PropTypes.node
};

export default MoreInfo;
