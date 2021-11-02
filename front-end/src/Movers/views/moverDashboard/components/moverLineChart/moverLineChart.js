import React from "react";
import { Line } from "react-chartjs-2";

import {
    Card,
    CardHeader,
    CardContent,
  
    Divider,
    Grid,
  
  } from '@material-ui/core';
class LineChart extends React.Component {
  state = {
    options: {
        
        legend: {
          position: 'right',
          labels: {
            boxWidth: 10
          }
        }
    },
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Total",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "black",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "black",
          pointBackgroundColor: "black",
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(10, 0, 0)",
          pointHoverBorderColor: "rgba(210, 220, 220,1)",
          pointHoverBorderWidth: 4,
          pointRadius: 1,
          data: [-90000000, 0, 90000000, 0, 56, 55, 40]
        },
        {
            label: "Admin Earn",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(22, 204,230, .3)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "black",
            pointBackgroundColor: "rgb(115, 255, 255)",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(10, 0, 0)",
            pointHoverBorderColor: "rgba(210, 220, 220,1)",
            pointHoverBorderWidth: 4,
            pointRadius: 1,
            data: [-140000000, 0, 10000000, 0, 56, 55, 40]
          },
        {
          label: "Admin Paid",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "blue",

          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "black",
          pointBackgroundColor: "red",
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "black",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28000000, 0, 0, 0, 0, 0, 0]
        },
        {
            label: "Paid Deliveryman",
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(255,0,0,0.8)",
            borderColor: "green",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "black",
            pointBackgroundColor: "rgb(5, 255, 255)",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [80000000, 0, 8000000, -0, -0, -0, -0]
          },
          {
            label: "Admin Paid",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(255,99,71,0.2)",

            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "black",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [120000000, 0, -100000000, 0,0, 0, 0]
          },
      ]
    }
  };

  render() {
    return (
        <Card>
        <CardHeader
       
        title="Last 6 Months Payment Details"
        style={{backgroundColor:"#dddddd"}}
      />
      <Divider />
    
      <CardContent>
      <Grid container spacing={1} xs={12} lg={12}>   
        <Line data={this.state.dataLine} options={this.state.options } />
      </Grid>
      </CardContent>
      </Card>
    );
  }
}

export default LineChart;