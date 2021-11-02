import React from 'react';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import 'antd/dist/antd.css';

const mouse10 = () => {
    var colorhex = ['#000000'];
    var el = document.getElementById('colorstext10');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout10 = () => {
    var white = '#000000';
    var el = document.getElementById('colorstext10');
    el.style.color = white;
  };
  const mouse11 = () => {
    var colorhex = ['#000000'];
    var el = document.getElementById('colorstext11');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout11 = () => {
    var white = '#000000';
    var el = document.getElementById('colorstext11');
    el.style.color = white;
  };
  
  const mouse12 = () => {
    var colorhex = ['#000000'];
    var el = document.getElementById('colorstext12');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout12 = () => {
    var white = '#000000';
    var el = document.getElementById('colorstext12');
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