import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
// import { Sidebar, Topbar, Footer } from './components';

import { Footer } from '../../components';
import '../../App.css';
const useStyles = makeStyles(() => ({
  root: {
    // backgroundImage: `url(${hww})`,
    // height: '100vh',
    // backgroundPosition: 'right',
    // backgroundRepeat: 'no-repeat',
    // background: '#F2E161',
    // backgroundSize: '90% 100%',
    // '@media(max-width: 787px)': {
    //   overflow: 'scroll',
    //   backgroundImage: 'none',
    //   background: '#F2E161'
    // }
  }
}));

const Help = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);




  return (
    <div
      style={{}}
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}>
      {/* <TopBarMenu onSidebarOpen={handleSidebarOpen} /> */}
      <main className={classes.content} style={{}}>
        {children}
        <Footer help={true} style={{}} />
      </main>
    </div>
  );
};

Help.propTypes = {
  children: PropTypes.node
};

export default Help;
