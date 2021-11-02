import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
// import { Sidebar, Topbar, Footer } from './components';

import { TopBarMenu, Footer } from '../../components';
import '../../App.css';
const useStyles = makeStyles(() => ({
  root:{
    '@media(max-width: 787px)':{
      overflow:'scroll'
    }
  }
}));

const FinalCost = props => {
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
      style={{
        backgroundColor: '#F2E161',
        height:'100vh'
      }}
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}>
      <TopBarMenu onSidebarOpen={handleSidebarOpen} />
      <main className={classes.content} style={{}}>
        {children}

        <Footer style={{ backgroundColor: '#f5e461' }} />
      </main>
    </div>
  );
};

FinalCost.propTypes = {
  children: PropTypes.node
};

export default FinalCost;
