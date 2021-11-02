import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { MoverContext } from '../../contexts/MoverContext'
import { Redirect } from 'react-router-dom'
import {
  // PaymentDetails,
  // DeliverymanPayments,
  // AdminPayments,
  // Dashboarddone,
  // StorePayments,
  // OrderDetails,
  // LineChart,
  // BarChat,
  // FullDetails,


} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "white",
    height: "300vh"
  },

}));

const Dashboard = () => {
  const classes = useStyles();


  return (
    <MoverContext.Consumer>{(context) => {
      return ( context.isAuthenticated ? (<div className={classes.root}>
        <Grid
          container
          spacing={4}
        >
  
          <Grid
            item
            lg={4}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <Dashboarddone /> */}
          </Grid>
  
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <OrderDetails /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <FullDetails /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <AdminPayments /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <StorePayments /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <DeliverymanPayments /> */}
          </Grid>
          <Grid
            item
            lg={412}
            md={12}
            xl={12}
            xs={12}
          >
            {/* <LineChart /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <PaymentDetails /> */}
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <BarChat /> */}
          </Grid>
  
        </Grid>
      </div> ) : (
        <Redirect to="signin"/>
      )
    )
    }}
    </MoverContext.Consumer>
   );
};

export default Dashboard;
