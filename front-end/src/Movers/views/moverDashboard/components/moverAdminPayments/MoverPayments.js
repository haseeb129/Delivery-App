import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  
  Typography
} from '@material-ui/core';
import {
  CircularProgressbar,

  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { 
  FaUserAlt,
  FaStore,
} from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(20),
   
  },
  deviceIcon: {
    color: theme.palette.icon,
    width:"50vh",
    height:"5vh"
  },

  
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const AdminPayments = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();





  const devices = [
    {
      title: 'Total',
      value: <h3>2975314.00</h3>,
      icon: <FaUserAlt style={{width:"6vh",height:"3vh", color:"white", /*marginTop:"1vh"*/marginBottom:"3vh"}}/>,
      color: theme.palette.primary.main
    },
    {
      title: 'Admin Earn',
      value: <h3>245671563.00</h3>,
      icon: <FaStore style={{width:"6vh",height:"3vh", color:"white", /*marginTop:"1vh"*/ marginBottom:"3vh"}}/>,
      color: theme.palette.error.main
    },


  ];

  return (
    
      
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
       
        title="Admin Payments"
        style={{backgroundColor:"#dddddd"}}
      />
      <Divider />
    
      <CardContent>
      <Grid container spacing={0} xs={12} lg={12}>
      <div style={{ paddingLeft: "40px",paddingRight:"40px",paddingBottom:"-20px", height:'45vh'}}>
<Grid style={{height: '200px'}} item xs={12}>
        <CircularProgressbar
          value={65.7}
          text={`${65.7}%`}
          strokeWidth={10}
          circleRatio={0.5}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: "0.75",
            strokeLinecap: 'butt',
            textColor:'black',
            pathColor:'black',
            height:'100vh'
            
          })}
        />
        </Grid>
        <Grid container spacing={0} xs={12} lg={12}>
          {devices.map((device,i) => (
            
            <Grid container spacing={0} xs={6} lg={6}>
              <Grid Item xs={3}>
                <Typography>
                  {i === 0 ? 
                  <div style={{width:'3vh',backgroundColor:'grey',borderRadius:'3px',height:"3vh",borderWidth: '20px', }}></div>:
                  i === 1 ?
                  <div style={{width:'3vh',backgroundColor:'black',borderRadius:'3px',height:"3vh",borderWidth: '20px', }}></div> :
                  <div></div> }
                
                </Typography>
              </Grid>

             <Grid Item xs={8}>
              <span style={{fontFamily:"calibri"}}>{device.title}</span> <Typography style={{fontFamily:"calibri"}}>{device.value}</Typography>
             </Grid>
            </Grid>
           
          ))}
        </Grid>
</div>

        </Grid>
      </CardContent>
     
    </Card>
    
    
  );
};

AdminPayments.propTypes = {
  className: PropTypes.string
};

export default AdminPayments;