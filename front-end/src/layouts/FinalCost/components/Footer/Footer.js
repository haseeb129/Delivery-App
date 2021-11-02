import React from 'react';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import '../../../../App.css';

const useStyles = makeStyles(theme => ({}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.root}>
        <Widget
          launcherCloseLabel="Chat with us"
          title="Welcome"
          subtitle="Ask us anything"
        />
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
