import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import '../../../../App.css';
import { withStyles } from '@material-ui/styles';
import { StepperDataContext } from '../../../../contexts/StepperDataContext';

const styles = () => ({
  WhiteBackground: {
    background: 'white',
    borderRadius: '45px',
    color: '#101820FF',
    border: '1px solid white',
    height: '15vh',
    width: '40vh',
    textAlign: 'center'
  },
  WhiteGrid: {},
  Button: {
    width: '37vh',
    height: '7vh',
    fontSize: '20px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF',
      color: 'white'
    },
    '@media (max-width:1360px)': {
      fontSize: '16px',
      margin: '10px 0'
    }
  },
  Price: {
    color: '#101820FF',
    fontSize: '50px'
  },
  Heading: {
    fontSize: '3rem',
    textAlign: 'center',
    paddingBottom: '4vh',
    '@media (max-width:786px)': {
      marginTop: '3vh',
      fontSize: '1.5rem'
    }
  },
  SubHeading: {
    fontSize: '35px'
  },
  largerBtnContent: {
    fontSize: '20px'
  },
  largerBtn: {
    width: '40vh',
    height: '7vh',
    fontSize: '20px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF',
      color: 'white'
    }
  },
  SmallerBtnContent: {
    fontSize: '20px'
  },
  UnderPrice: {
    fontSize: '15px',
    fontWeight: 'bold'
  },
  CheckList: {
    fontSize: '22px'
  },
  Title: {
    fontSize: '22px',
    fontWeight: '800',
    '@media (max-width:787px)': {
      fontSize: '16px'
    }
  },
  ReviewBoxes: {
    overflowX: 'auto',
    overflowX: 'hidden',
    maxHeight: '25vh'
  },
  MainLoader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#00000073',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '9999999'
  }
});
const CustomRouterLink = forwardRef((props, ref) => {
  console.log(props);
  return (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  );
});
const pages = [
  {
    title: 'Get Quote Now',
    href: '/finalcost'
  }
];
const pages1 = [
  {
    title: 'Edit Moving List',
    href: '/moreinfo'
  }
];

class ReviewPage extends React.Component {
  static contextType = StepperDataContext;
  constructor(props) {
    super(props);
    this.state = {
      menusList: [
        {
          idMenu: 7,
          name: 'LIVING ROOM',
          categoriesList: [
            {
              Name: 'Tv Stand',
              Type: '',
              Quantity: 3
            },
            {
              Name: 'Armchair',
              Type: '',
              Quantity: 3
            },
            {
              Name: 'Futon',
              Type: '',
              Quantity: 3
            },
            {
              Name: 'Sofa',
              Type: '',
              Quantity: 1
            },
            {
              Name: 'Love Seat',
              Type: '',
              Quantity: 3
            },
            {
              Name: 'TV',
              Type: '72*',
              Quantity: 4
            }
          ]
        },
        {
          idMenu: 27,
          name: 'DINNING ROOM',
          categoriesList: [
            {
              Name: 'Dinning Room Table',
              Type: 'Glass',
              Quantity: 1
            },
            {
              Name: 'Dinning Room Chairs',
              Type: '',
              Quantity: 6
            },
            {
              Name: 'China Cabinets',
              Type: 'Large',
              Quantity: 1
            }
          ]
        },
        {
          idMenu: 7,
          name: 'BEDROOM',
          categoriesList: [
            {
              Name: 'Beds',
              Type: '1 Twin, 1 King',
              Quantity: 3
            },
            {
              Name: 'Nightstand Tables',
              Type: '3 Drawers',
              Quantity: 1
            },
            {
              Name: 'Chest',
              Type: '6 Drawers',
              Quantity: 5
            },
            {
              Name: 'Dresser',
              Type: '6 Drawers',
              Quantity: 2
            }
          ]
        },
        {
          idMenu: 7,
          name: 'Kitchen',
          categoriesList: [
            {
              Name: 'Refrigerators',
              Type: 'Side by Side',
              Quantity: 3
            },
            {
              Name: 'Stoves',
              Type: 'Stove with oven',
              Quantity: 1
            },
            {
              Name: 'Dryers',
              Type: '',
              Quantity: 5
            },
            {
              Name: 'Washers',
              Type: '',
              Quantity: 2
            },
            {
              Name: 'Dryer & Washer Combos',
              Type: '',
              Quantity: 2
            }
          ]
        },
        {
          idMenu: 7,
          name: 'Miscellaneous',
          categoriesList: [
            {
              Name: 'Frames',
              Type: '',
              Quantity: 3
            },
            {
              Name: 'Area Rugs',
              Type: '',
              Quantity: 1
            },
            {
              Name: 'Lamps',
              Type: '',
              Quantity: 5
            },
            {
              Name: 'Ceiling Fans',
              Type: '',
              Quantity: 2
            },
            {
              Name: 'Desks',
              Type: '',
              Quantity: 2
            }
          ]
        },
        {
          idMenu: 7,
          name: 'MOVING LOGISTICS',
          categoriesList: [
            {
              Name: 'Floor # moving from',
              Type: '',
              Quantity: 2
            },
            {
              Name: 'Floor # moving to',
              Type: '',
              Quantity: 1
            },
            {
              Name: 'Loading dock distance',
              Type: '',
              Quantity: '150*'
            },
            {
              Name: 'Door removal',
              Type: '',
              Quantity: 1
            },
            {
              Name: 'No elevator',
              Type: '',

              Quantity: ''
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    let menuList = [];
    for (let i in this.context) {
      switch (i) {
        case 'ListOfLivingRoom':
          let itemObj1 = {};
          itemObj1.categoriesList = [];
          itemObj1.name = 'LIVING ROOM';
          this.context[i].forEach((items) => {
            let categoryObj = {};
            let details = this.context.details[items.item];
            if (details.length > 0) {
              categoryObj.Name = items.item;
              categoryObj.Type = [...details];
              categoryObj.Quantity = details.length;
              itemObj1.categoriesList.push(categoryObj);
            }
          });
          console.log(itemObj1);
          menuList.push(itemObj1);
          break;
        case 'ListOfKitchen':
          let itemObj2 = {};
          itemObj2.categoriesList = [];
          itemObj2.name = 'KITCHEN';
          this.context[i].forEach((items) => {
            let categoryObj = {};
            let details = this.context.details[items.item];
            if (details.length > 0) {
              categoryObj.Name = items.item;
              categoryObj.Type = [...details];
              categoryObj.Quantity = details.length;
              itemObj2.categoriesList.push(categoryObj);
            }
          });
          menuList.push(itemObj2);
          break;
        case 'ListOfDiningRoom':
          let itemObj3 = {};
          itemObj3.categoriesList = [];
          itemObj3.name = 'DINING ROOM';
          this.context[i].forEach((items) => {
            let categoryObj = {};
            let details = this.context.details[items.item];

            if (details.length > 0) {
              categoryObj.Name = items.item;
              categoryObj.Type = [...details];
              categoryObj.Quantity = details.length;
              itemObj3.categoriesList.push(categoryObj);
            }
          });
          menuList.push(itemObj3);
          break;
        case 'ListOfBedrooms':
          let itemObj4 = {};
          itemObj4.categoriesList = [];
          itemObj4.name = 'BED ROOMS';
          this.context[i].forEach((items) => {
            let categoryObj = {};
            let details = this.context.details[items.item];
            if (details.length > 0) {
              categoryObj.Name = items.item;
              categoryObj.Type = [...details];
              categoryObj.Quantity = details.length;
              itemObj4.categoriesList.push(categoryObj);
            }
          });
          menuList.push(itemObj4);
          break;
        case 'ListOfMiscellaneous':
          let itemObj5 = {};
          itemObj5.categoriesList = [];
          itemObj5.name = 'Miscellaneous';
          this.context[i].forEach((items) => {
            let categoryObj = {};
            let details = this.context.details[items.item];
            // console.log(this.context.details[items.item])
            // console.log(details)
            if (details && details.length > 0) {
              categoryObj.Name = items.item;
              categoryObj.Type = [...details];
              categoryObj.Quantity = details.length;
              itemObj5.categoriesList.push(categoryObj);
            }
          });
          menuList.push(itemObj5);
          break;
      }
      this.setState({
        menusList: menuList
      });
    }

    if (
      this.context.moveFrom !== '' ||
      this.context.moveTo !== '' ||
      this.context.loadingDock !== '' ||
      this.context.doorRemoval !== ''
    ) {
      let itemObj6 = {
        name: 'MOVING LOGISTICS',
        categoriesList: [
          {
            Name: 'Floor # moving from',
            Type: '',
            Quantity: this.context.moveFrom
          },
          {
            Name: 'Elevator # moving from',
            Type: '',
            Quantity: this.context.moveFromElevator
              ? 'Available'
              : 'No Elevator'
          },
          {
            Name: 'Floor # moving to',
            Type: '',
            Quantity: this.context.moveTo
          },
          {
            Name: 'Elevator # moving To',
            Type: '',
            Quantity: this.context.moveToElevator ? 'Available' : 'No Elevator'
          },
          {
            Name: 'Loading dock distance',
            Type: '',
            Quantity: this.context.loadingDock
          },
          {
            Name: 'Door removal',
            Type: '',
            Quantity: this.context.doorRemoval
          }
        ]
      };
      menuList.push(itemObj6);
      // console.log(menuList)
      this.setState({
        menusList: menuList
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { className, onSidebarOpen } = this.props;
    return (
      <Grid container xs={12} sm={12}>
        {/* {this.context.loader ?  <div className={classes.MainLoader}>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> : null} */}
        <Grid container xs={12} sm={12} justify="center">
          <Grid item xs={12} sm={12} lg={5}>
            <Typography className={classes.Heading}>
              Review your Moving list
            </Typography>
          </Grid>
        </Grid>
        {this.state.menusList.map((list) => (
          <Grid item xs={12} sm={3} lg={3} style={{ padding: '3vh' }}>
            <Typography className={classes.Title} style={{}}>
              {list.name}
            </Typography>
            <Grid item xs={12} style={{ paddingTop: '2vh' }}>
              <div
                style={{
                  height: '.1vh',
                  background: 'black',
                  paddingLeft: '1vh'
                }}
              />
              <Grid
                container
                xs={12}
                className={[classes.ReviewBoxes, 'ReviewBoxes-22'].join(' ')}
                style={{ paddingTop: '2vh', paddingRight: '1vh' }}>
                {list.categoriesList.map((CheckList) => (
                  <Grid container xs={12}>
                    <Grid item xs={6} style={{ paddingTop: '0vh' }}>
                      <Typography style={{ lineHeight: 2, fontWeight: '500' }}>
                        {CheckList.Name.replace(/_/g, ' ')}
                        <br />
                      </Typography>
                    </Grid>
                    <Grid item xs={4} align="right">
                      <Typography style={{ fontWeight: 'bold' }}>
                        {typeof CheckList.Type === 'object' ? (
                          <ul style={{ listStyleType: 'none' }}>
                            {CheckList.Type.map((size) => {
                              return <li key={size.key}>{size.sizing}</li>;
                            })}
                          </ul>
                        ) : null}
                      </Typography>
                    </Grid>
                    <Grid item xs={2} align="right">
                      <Typography>{CheckList.Quantity}</Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid
          container
          xs={12}
          sm={3}
          align="center"
          style={{ paddingTop: '5vh' }}>
          <Grid item xs={12} style={{ marginBottom: '2vh' }}>
            {pages1.map((page) => (
              <Grid item xs={12}>
                <Button
                  activeClassName={classes.active}
                  className={classes.Button}
                  key={page.title}
                  component={CustomRouterLink}
                  to={
                    page.href === '/moreinfo'
                      ? {
                          pathname: page.href,
                          state: { fromLink: 'Residential' }
                        }
                      : page.href
                  }
                  variant="contained"
                  color="primary">
                  {page.title}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: '5vh' }}>
            {pages.map((page) => (
              <Grid item xs={12}>
                <Button
                  activeClassName={classes.active}
                  className={classes.Button}
                  key={page.title}
                  component={CustomRouterLink}
                  to={page.href}
                  variant="contained"
                  color="primary">
                  {page.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
ReviewPage.propTypes = {
  className: PropTypes.string
};

export default withStyles(styles)(ReviewPage);
