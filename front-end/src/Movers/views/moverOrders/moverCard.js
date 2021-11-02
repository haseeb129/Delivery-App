import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import { 
  MdLocationOn

} from 'react-icons/md';
import './Style.css';



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
  

const CardZZ = props => {
    const { className, ...rest } = props;
  
    const classes = useStyles();
    const theme = useTheme();
const devices = [
    {
      location:<MdLocationOn/>,
      address:<h5><MdLocationOn/> DELIVERY ADDRESS</h5>,
      completeaddress:<p style={{marginTop:"10px", marginBottom:"20px",marginLeft:"10px"}}>{props.rowData.address}</p>,
      title: <h5>ORDER BY</h5>,
    value:<span> {props.rowData.orderFrom}<br/><span>{props.rowData.emailClient}</span><br/><span>{props.rowData.phoneClient}</span></span>,
      icon: <img 
      src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
      alt="new" width="90px" height="90px"
      />,
      color: theme.palette.primary.main
    },
    {
      title: <h5>ORDER TO</h5>,
      value: <span> {props.rowData.orderTo}<br/><span>{props.rowData.emailUser}</span><br/><span>{props.rowData.phoneUser}</span><span><br/></span>{props.rowData.storeAddress}</span>,
      icon: <img 
      src="https://www.vippng.com/png/detail/412-4125354_person-circle-comments-profile-icon-png-white-transparent.png"
      alt="new" width="90px" height="90px" 
      />,
      color: theme.palette.error.main
    },


  ];
  return (
    
      
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      style={{height:"100%"}}
    >
     
      <CardContent>
      <Grid container spacing={0} xs={12} lg={12}>
          {devices.map(device => (
              
           
            <Grid container spacing={0} xs={12} lg={12}>
                <Grid Item xs={12}>
                    <p>
                        <span>{device.address}</span>
                    </p></Grid>
                    <Grid Item xs={12}>
                        <p>
                            <span>
                                {device.completeaddress}
                            </span>
                        </p></Grid>
              <Grid Item xs={4}>
                <p>
                 
                      <span  > {device.icon}</span>
                
                </p>
              </Grid>

             <Grid Item xs={4}>
              <span>{device.title}</span> <Typography>{device.value}</Typography>
             </Grid>
            </Grid>
           
          ))}
        </Grid>
      </CardContent>
     
    </Card>
    
    
  );
};

CardZZ.propTypes = {
  className: PropTypes.string
};

export default CardZZ;

