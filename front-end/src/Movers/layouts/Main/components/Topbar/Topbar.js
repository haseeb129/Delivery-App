import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { MoverContext } from '../../../../contexts/MoverContext';
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  Logo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '22px',
    '&:hover': {
      color: '#fff',
      textDecoration: 'none'
    }
  }
}));

const Topbar = (props) => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);
  return (
    <MoverContext.Consumer>
      {(context) => {
        return (
          <AppBar {...rest} className={clsx(classes.root, className)}>
            <Toolbar>
              <RouterLink
                to="/mover/dashboard"
                className={classes.Logo}
                style={{}}>
                {/* <img
            alt="Logo"
            src="/images/logos/logo--white.svg"
          /> */}
                Mover Dashboard
              </RouterLink>
              <div className={classes.flexGrow} />
              <Hidden mdDown>
                <IconButton color="inherit">
                  <Badge
                    badgeContent={notifications.length}
                    color="primary"
                    variant="dot">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  className={classes.signOutButton}
                  color="inherit"
                  onClick={context.handleLogout}>
                  <InputIcon />
                </IconButton>
              </Hidden>
              <Hidden lgUp>
                <IconButton color="inherit" onClick={onSidebarOpen}>
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Toolbar>
          </AppBar>
        );
      }}
    </MoverContext.Consumer>
  );
};
Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
