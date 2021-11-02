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
  FaShuttleVan,
  FaSellcast,
} from 'react-icons/fa';
import { MdCancel } from "react-icons/md";
import {GiStorkDelivery} from "react-icons/gi"
import {AiOutlineFileDone} from "react-icons/ai"


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

const OrderDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();


  const devices = [
    {
      title: 'Orders',
      value: <h3>27</h3>,
      icon: <FaShuttleVan style={{width:"6vh",height:"3vh", color:"white", marginTop:"1vh"}}/>,
      color: theme.palette.primary.main
    },
    {
      title: 'Cancelled',
      value: <h3>1</h3>,
      icon: <MdCancel style={{width:"6vh",height:"3vh", color:"white", marginTop:"1vh", marginBottom:"1vh"}}/>,
      color: theme.palette.error.main
    },
    {
      title: 'Delievery',
      value: <h3>5</h3>,
      icon: <GiStorkDelivery style={{width:"6vh",height:"3vh", color:"white", marginTop:"1vh", marginBottom:"1vh"}}/>,
      color: theme.palette.warning.main,
      height:"5vh",
      width:"50vh"
    },
    {
      title: 'Total Item Sold',
      value: <h3>22</h3>,
      icon: <FaSellcast style={{width:"6vh",height:"4vh", color:"white", marginTop:"1vh", marginBottom:"2vh"}}/>,
      color: theme.palette.warning.main,
      height:"5vh",
      width:"50vh"
    },
    {
      title: 'Completed',
      value: <h3>16</h3>,
      icon: <AiOutlineFileDone style={{width:"6vh",height:"3vh", color:"white", marginTop:"1vh", marginBottom:"1vh"}}/>,
      color: theme.palette.warning.main,
      height:"5vh",
      width:"50vh"
    }

  ];

  return (
    
      
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
       
        title="Order Details"
        style={{backgroundColor:"#dddddd"}}
      />
      <Divider />
    
      <CardContent>
      <Grid container spacing={0} xs={12} lg={12}>
          {devices.map(device => (
            <Grid container spacing={0} xs={6} lg={6}>
              <Grid Item xs={4}>
                <Typography>
                  <div style={{width:'6vh',backgroundColor:'red',borderRadius:'3px',height:"5vh",borderWidth: '20px', }}>
                      <span className={classes.deviceIcon} >{device.icon}</span>
                  </div>
                </Typography>
              </Grid>

             <Grid Item xs={5}>
              <span style={{fontFamily:"calibri"}}>{device.title}</span> <Typography style={{fontFamily:"calibri"}}>{device.value}</Typography>
             </Grid>
            </Grid>
           
          ))}
        </Grid>
      </CardContent>
     
    </Card>
    
    
  );
};

OrderDetails.propTypes = {
  className: PropTypes.string
};

export default OrderDetails;



