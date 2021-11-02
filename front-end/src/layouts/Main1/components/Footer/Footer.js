import React from 'react';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Widget } from 'react-chat-widget';
import PhoneIcon from '@material-ui/icons/Phone';
import 'react-chat-widget/lib/styles.css';
import '../../../../App.css';

const useStyles = makeStyles(theme => ({
  Question: {
    padding: '1rem 0',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    '@media (max-width:600px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: 'auto'
    }
  },
  pQuestion: {
    color: 'rgb(25, 34, 31)',
    fontSize: '20px',
    fontWeight: 'bold',
    '& a': {
      color: 'rgb(25, 34, 31)',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    '@media (max-width:600px)': {
      fontSize: '16px',
      lineHeight: '14px',
      margin: '0 4vh',
      marginBottom: '1vh'
    }
  },
  PhoneIcon: {
    display: 'inline-block',
    background: '#3bb5fb',
    // color: '#f2e161',
    color: '#fff',
    padding: '.2rem',
    borderRadius: '50%'
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.root}>
        <div className={classes.Question}>
          <Typography className={classes.pQuestion}>
            <span className={classes.PhoneIcon}>
              <PhoneIcon />
            </span>{' '}
            <a href="tel:+17879558832">Questions? Call us at 787-955-8832</a>
          </Typography>
        </div>
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
