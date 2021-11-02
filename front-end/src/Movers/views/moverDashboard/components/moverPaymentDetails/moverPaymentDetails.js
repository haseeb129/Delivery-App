import React from "react";
import { Pie } from "react-chartjs-2";
import Grid from '@material-ui/core/Grid';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

class PaymentDetails extends React.Component {
  state = {
    options: {
      responsive: false,
      legend: {
        position: 'right',
        labels: {
          boxWidth: 10
        }
      }
  },
    dataPie: {
      labels: ["OtherPayment", "CashPayment", "Promo", "Wallet"],
     
      datasets: [
        {
          
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            
          ],
          
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }
  }

  render() {
    return (
      
      <Card
  
      
    >
      <CardHeader
       
        title="Last 6 Months Payment Details"
        style={{backgroundColor:"#dddddd"}}
      />
      <Divider />
    
      <CardContent>
      <Grid container spacing={0} xs={12} md={12}>
 
        
        <Pie data={this.state.dataPie} options={this.state.options} />

      </Grid>
      </CardContent>
      
      </Card>
    );
  }
}

export default PaymentDetails;