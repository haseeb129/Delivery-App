import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
const useStyles = makeStyles((theme) => ({

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Deliveries() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [view, setView] = React.useState(0);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const openSecondView = () => {
    setView(1);
  }

  return (

    view === 0 ?
      <Grid container xs={12} spacing={0} style={{
        backgroundColor: "white",
        height: "89vh"
      }}>
        <Grid container xs={12} md={4} >
          <Grid item xs={12} style={{ marginLeft: "5%", }}>
            <Card >
              <CardHeader
                onClick={openSecondView}
                style={{ backgroundColor: "#bbbbbb" }}
                action={
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                }
                title="Food"


              />
              <CardMedia
                className={classes.media}
                image="https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Food Store
        </Typography>
              </CardContent>

            </Card>
          </Grid>
        </Grid>

        <Grid container xs={12} md={4} >
          <Grid item xs={12} style={{ marginLeft: "5%" }}>
            <Card className={classes.root}>
              <CardHeader
                style={{ backgroundColor: "#bbbbbb" }}
                action={
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                }
                title="Pharmacies"


              />
              <CardMedia
                className={classes.media}
                image="https://ahvalnews.com/sites/default/files/styles/is_article_featured_top_1200x550/public/2018-01/akayezcanesi3.jpg?h=eaf6ec53&itok=hA3b9wXy"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Medicamentos en General
      </Typography>
              </CardContent>

            </Card>
          </Grid>
        </Grid>
        <Grid container xs={12} md={4}>
          <Grid item xs={12} style={{ marginLeft: "5%", marginRight: "5%" }}>
            <Card className={classes.root}>
              <CardHeader
                style={{ backgroundColor: "#bbbbbb" }}
                action={
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                }
                title="Courier"


              />
              <CardMedia
                className={classes.media}
                image="https://cdn1.vectorstock.com/i/1000x1000/63/30/the-courier-brought-the-parcel-by-car-in-the-city-vector-22836330.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Courier
      </Typography>
              </CardContent>

            </Card>
          </Grid>
        </Grid>
      </Grid>
      :
      <Grid container spacing={0} xs={12} style={{ marginLeft: "3%", marginRight: "" }}>
        <Grid container xs={12} md={7}>
          <Grid item xs={12}>
            <Card className={classes.root}>
              <CardHeader
                onClick={openSecondView}
                style={{ backgroundColor: "#bbbbbb" }}
                action={
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                }
                title="Delivery Data"


              />

              <CardContent>
                <Grid container xs={12} spacing={2}>
                  <Grid item xs={4}>
                    <b>  Name</b>
                  </Grid>

                  <Grid item xs={8}>
                    <FormControl
                      style={{ width: "100%" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        className={clsx(classes.margin, classes.textField)}
                        id="outlined-adornment-weight"
                        defaultValue="Food"
                        placeholder="Food"
                        margin="dense"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container xs={12} style={{ marginTop: "3vh" }}>
                  <Grid item xs={4}>
                    <b>Delivery</b>
                  </Grid>

                  <Grid item xs={8}>
                    <FormControl
                      style={{ width: "100%" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        defaultValue="Food Store"
                        placeholder="Food Store"
                        margin="dense"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container xs={12} style={{ marginTop: "3vh" }}>
                  <Grid item xs={4}>
                    <b>Delivery Type</b>
                  </Grid>

                  <Grid item xs={8}>
                    <FormControl
                      style={{ width: "100%" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        defaultValue="Select Delivery Type"
                        placeholder="Select Delivery Type"
                        margin="dense"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container xs={12} style={{ marginTop: "3vh" }}>
                  <Grid item xs={4}>
                    <b>Business</b>
                  </Grid>

                  <Grid item xs={8}>
                    <Switch
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </Grid>
                </Grid>
                <Grid container xs={12} style={{ marginTop: "3vh" }}>
                  <Grid item xs={4}>
                    <h4>Image</h4>
                  </Grid>

                  <Grid item xs={4}>
                    <h4>Icon</h4>
                  </Grid>
                  <Grid item xs={4}>
                    <h4>Map Pin</h4>
                  </Grid>
                </Grid>
                <Grid container xs={12} style={{ marginTop: "5vh" }}>
                  <Grid item xs={4}>
                    <img src={"https://ichef.bbci.co.uk/news/660/cpsprodpb/3DAD/production/_104898751_gettyimages-844466808.jpg"} width="100" height="100"></img>
                  </Grid>

                  <Grid item xs={4}>
                    <img src={"https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"} widdth="100" height="100" />
                  </Grid>
                  <Grid item xs={4}>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkSAVE9O3nSGd_S8-rxXnGIOywMVqgSTH60ivV8vzOzm2QQZ73&usqp=CAU"} width="100" height="100" />
                  </Grid>
                </Grid>
              </CardContent>

            </Card>
          </Grid>
        </Grid>
        <Grid container xs={12} md={4} >
          <Grid item xs={12} style={{ marginLeft: "5vh" }} >
            <Card className={classes.root}>
              <CardHeader
                onClick={openSecondView}
                style={{ backgroundColor: "#bbbbbb" }}
                action={
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                }
                title="Delivery Data"


              />
              <CardContent>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
  );
}

