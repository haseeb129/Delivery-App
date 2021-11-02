import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { MdDone } from "react-icons/md";
import { IconButton } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "auto",
    height: "auto",
    paddingTop: "-100px"
  }
}));

export default function Settings() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container xs={12} spacing={2} style={{
      marginLeft: "1%", backgroundColor: "white",
      height: "120vh"
    }}>
      <Grid item xs={12} md={4}>
        <Card className={classes.root}>
          <CardHeader
            style={{ backgroundColor: "#dddddd" }}
            title="Order Price Settings"
            action={
              <IconButton aria-label="settings">
                <MdDone />
              </IconButton>
            }
          />

          <CardContent>
            <Grid container xs={12}>
              <Grid item xs={6}>
                Tax on Item
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                >
                  <OutlinedInput
                    className={clsx(classes.margin, classes.textField)}
                    id="outlined-adornment-weight"
                    defaultValue="0"
                    placeholder="0"
                    margin="dense"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container xs={12} style={{ marginTop: "7vh" }}>
              <Grid item xs={6}>
                Minimum Order Price
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    defaultValue="0"
                    placeholder="0"
                    margin="dense"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container xs={12} style={{ marginTop: "5vh" }}>
              <Grid item xs={10}>
                Assign to deliveryman when the order is accepted
              </Grid>

              <Grid item xs={2}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card style={{ height: "100%" }}>
          <CardHeader
            style={{ backgroundColor: "#dddddd" }}
            title="Order Cancellation Settings"
            action={
              <IconButton aria-label="settings">
                <MdDone />
              </IconButton>
            }
          />

          <CardContent>
            <Grid container xs={12}>
              <Grid item xs={10}>
                Charge
              </Grid>

              <Grid item xs={2}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card style={{ height: "100%" }}>
          <CardHeader
            style={{ backgroundColor: "#dddddd" }}
            title="Schedule Order Settings"
            action={
              <IconButton aria-label="settings">
                <MdDone />
              </IconButton>
            }
          />

          <CardContent>
            <Grid container xs={12}>
              <Grid item xs={10}>
                Can user schedule order?
              </Grid>

              <Grid item xs={2}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card style={{ height: "100%" }}>
          <CardHeader
            style={{ backgroundColor: "#dddddd" }}
            title="Delivery Settings"
            action={
              <IconButton aria-label="settings">
                <MdDone />
              </IconButton>
            }
          />

          <CardContent>
            <Grid container xs={12} spacing={2}>

              <Grid item xs={10}>
                Delivery fee on store
              </Grid>
              <Grid item xs={2}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>

              <Grid item xs={6}>
                Min. Delivery Time
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                >
                  <OutlinedInput
                    className={clsx(classes.margin, classes.textField)}
                    id="outlined-adornment-weight"
                    defaultValue="0"
                    placeholder="0"
                    margin="dense"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                Max. Delivery Time
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                >
                  <OutlinedInput
                    className={clsx(classes.margin, classes.textField)}
                    id="outlined-adornment-weight"
                    defaultValue="0"
                    placeholder="0"
                    margin="dense"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={10}>
                Provide Pickup Delivery
              </Grid>

              <Grid item xs={2}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item xs={10}>
                Provide Delivery Anywhere
              </Grid>

              <Grid item xs={2}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card style={{ height: "100%" }}>
          <CardHeader
            style={{ backgroundColor: "#dddddd" }}
            title="Schedule Order Settings"
            action={
              <IconButton aria-label="settings">
                <MdDone />
              </IconButton>
            }
          />

          <CardContent>
            <Grid container xs={12}>
              <Grid item xs={10}>
                Business
              </Grid>

              <Grid item xs={2}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item xs={10}>
                Busy
              </Grid>

              <Grid item xs={2}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item xs={10}>
                Visible
              </Grid>

              <Grid item xs={2}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card style={{ height: "100%" }}>
          <CardHeader
            style={{ backgroundColor: "#dddddd" }}
            title="Operation Time Settings"
            action={
              <IconButton aria-label="settings">
                <MdDone />
              </IconButton>
            }
          />

          <CardContent>
            <Grid container xs={12}>
              <Grid item xs={10}>
                Business
              </Grid>

              <Grid item xs={2}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>


            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
