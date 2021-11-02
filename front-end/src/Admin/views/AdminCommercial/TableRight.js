import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, Typography } from "@material-ui/core";
import { MdLocationOn } from "react-icons/md";
import "./Style.css";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  chartContainer: {
    position: "relative",
    height: "300px",
  },
  stats: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  device: {
    textAlign: "center",
    padding: theme.spacing(20),
  },
  deviceIcon: {
    color: theme.palette.icon,
    width: "50vh",
    height: "5vh",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const TableRight = (props) => {
  const { className, ...rest } = props;

  console.log(props.rowData)

  const classes = useStyles();
  const theme = useTheme();
  const devices = [
    {
      location: <MdLocationOn />,
      address:
        <h5>
          <MdLocationOn /> Business Addition Request
        </h5>,
      completeaddress:
        <p
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            marginLeft: "10px",
          }}
        >
          {props.rowData.country}
        </p>
      ,
      title: <h5>Request From:</h5>,
      value:
        <span>
          {" "}
          {props.rowData.firstName}
          <br />
          <span>{props.rowData.email}</span>
          <br />
          <span>{props.rowData.phoneNumber}</span>
        </span>
      ,
      icon:
        <img
          src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
          alt="new"
          width="90px"
          height="90px"
        />,
    },
  ];
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      style={{ height: "100%" }}
    >
      <CardContent>
        <Grid container spacing={0} xs={12} lg={12}>
          {devices.map((device) => (
            <Grid container spacing={0} xs={12} lg={12}>
              <Grid Item xs={12}>
                <p>
                  <span>{device.city}</span>
                </p>
              </Grid>
              <Grid Item xs={12}>
                <p>
                  <span>{device.completeaddress}</span>
                </p>
              </Grid>
              <Grid Item xs={4}>
                <p>
                  <span> {device.icon}</span>
                </p>
              </Grid>

              <Grid Item xs={4}>
                <span>{device.title}</span>{" "}
                <Typography>{device.value}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid container xs={12} style={{ marginLeft: "8vh" }}>
          <Grid item xs={4} style={{ marginTop: "4vh" }}>
            <Button
              style={{
                fontFamily: "calibri",
                backgroundColor: "#dddddd",
                marginLeft: "9vh",
              }}
            >
              Approve
            </Button>
          </Grid>
          <Grid item xs={4} style={{ marginTop: "4vh", marginLeft: "4vh" }}>
            <Button
              style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }}
            >
              Reject
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TableRight.propTypes = {
  className: PropTypes.string,
};

export default TableRight;
