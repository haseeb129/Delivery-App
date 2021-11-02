import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Grid,
  } from '@material-ui/core';
class BarChat extends React.Component {
  state = {
    options: {
   
        legend: {
          position: 'right',
         
        }
    },
    dataBar: {
      labels: ["November", "December", "January", "Febuary", "March", "Orange"],
      datasets: [
        {
          label: "Other",
          data: [120000000, 190000000, 30000000, 50000000, 20000000, 30000000],
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)"
          ]
        },
        {
            label:"Wallet",
            data: [120000000, 190000000, 30000000, 50000000, 20000000, 30000000],
        },
        {
            label:"Promo",
        },
        {
            label:"Cash",
        },
    
      ]
    },

  }


  render() {
    return (
        <Card>
        <CardHeader
       
        title="Last 6 Months Payment Details"
        style={{backgroundColor:"#dddddd"}}
      />
      <Divider />
    
      <CardContent>
      <Grid container spacing={0} xs={12} lg={12}>
        <Bar data={this.state.dataBar} options={this.state.Options} />
        </Grid>
    </CardContent>
    </Card>
    
    );
  }
}

export default BarChat;