import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const mouse10 = event => {
    var colorhex = ['#000000'];
    var el = document.getElementById('colorstext10');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout10 = event => {
    var white = '#000000';
    var el = document.getElementById('colorstext10');
    el.style.color = white;
  };
  const mouse11 = event => {
    var colorhex = ['#000000'];
    var el = document.getElementById('colorstext11');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout11 = event => {
    var white = '#000000';
    var el = document.getElementById('colorstext11');
    el.style.color = white;
  };
  
  const mouse12 = event => {
    var colorhex = ['#000000'];
    var el = document.getElementById('colorstext12');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout12 = event => {
    var white = '#000000';
    var el = document.getElementById('colorstext12');
    el.style.color = white;
  };
  
  const mouse13 = event => {
    var colorhex = ['#000000'];
    var el = document.getElementById('colorstext13');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout13 = event => {
    var white = '#000000';
    var el = document.getElementById('colorstext13');
    el.style.color = white;
  };
  const mouse14 = event => {
    var colorhex = ['#000000'];
    var el = document.getElementById('colorstext14');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  
  const mouseout14 = event => {
    var white = '#000000';
    var el = document.getElementById('colorstext14');
    el.style.color = white;
  };
  
const NavBar = () => {
    return (
        <AppBar
            position="static"
            style={{
              
              postion:'absolute',      
              width: '100%',
              background:'transparent',
              height:'0vh'
            }}
          >
            <Toolbar>
                <Grid item xs={3}/>
              <Grid
                container
                
                xs={12}
              >
                <Grid
                  align="center"
                  container
                  justify="space-evenly"
                  style={{
                    marginBottom: '1vh',
                    }}
                  xs={8}
                >
                  <Grid
                    item
                    xs={2}
                  >
                    <Typography
                      id="colorstext10"
                      onMouseEnter={mouse10}
                      onMouseLeave={mouseout10}
                      style={{
                        cursor: 'pointer',
                        color: 'black',
                        fontSize: '16px',
                        fontWeight:'bold'
                  
                      }}
                    >
                      Terms of Use
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                  >
                    <Typography
                      id="colorstext11"
                      onMouseEnter={mouse11}
                      onMouseLeave={mouseout11}
                      style={{
                        cursor: 'pointer',
                        color: 'black',
                        fontSize: '16px',
                        fontWeight:'bold'
                      }}
                    >
                      Terms and Conditions
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                  >
                    <Typography
                      id="colorstext12"
                      onMouseEnter={mouse12}
                      onMouseLeave={mouseout12}
                      style={{
                        cursor: 'pointer',
                        color: 'black',
                        fontSize: '16px',
                        fontWeight:'bold'
                        
                      }}
                    >
                      Privacy Policy
                    </Typography>
                  </Grid>
                  </Grid>
                </Grid>
            </Toolbar>
          </AppBar>
    );

}
export default NavBar;