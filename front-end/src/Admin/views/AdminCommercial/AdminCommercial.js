import MaterialTable from 'material-table';
import React from 'react';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Fade,
  Modal,
  Backdrop,
  Button
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {
  Check,
  ChevronRight,
  SaveAlt,
  FilterList,
  FirstPage,
  LastPage,
  ChevronLeft,
  Search,
  Remove,
  ArrowDownward,
  AddBox,
  ViewColumn,
  Clear,
  Edit,
  Delete
} from '@material-ui/icons';

import { AdminContext } from '../../context/AdminContext';

class AdminCommercial extends React.Component {
  static contextType = AdminContext;
  constructor() {
    super();
    this.state = {
      open: false,
      rowData: '',

      showModal: false,
      Orders: [
        {
          id: '1',
          startDate: '22 Nov ',
          City: '381 D Wapda Town',
          Email: 'xyz@gmail.com',
          lastName: 'waishahid',
          PhoneNumber: 'JUST CBD',
          businessType: 'WaizXXYY',
          BusinessName: 'JUST XYZ',
          date: '15 July 5:00 PM',
          fullName: 'Shady',
          City: 'hye hy yah',
          postalCode: 'B G',
          website: 'Accepted',
          amount: '23899.13',
          paidby: 'Cash',
          action: (
            <Button
              onClick={this.handleOpenModal}
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}>
              Details
            </Button>
          )
        },
        {
          id: '3',
          startDate: '29 Nov ',
          address: '383 D Wapda Town',
          Email: 'xyz@gmail.com',
          lastName: 'aizshahid',
          PhoneNumber: 'JUST CBD',
          businessType: 'WaizXXZ',
          BusinessName: 'CD AD AN',
          fullName: 'ShadyX',
          City: 'hyf hy yah',
          date: '15 July 5:00 PM',
          postalCode: 'B G',
          website: 'Accepted',
          amount: '28499.13',
          paidby: 'Cash',
          action: (
            <Button
              onClick={this.handleOpenModal}
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}>
              Details
            </Button>
          )
        },
        {
          id: '4',
          startDate: '30 Nov ',
          address: '384 D Wapda Town',
          Email: 'xyz@gmail.com',
          lastName: 'waizsahid',
          PhoneNumber: 'JUST CBD',
          businessType: 'WaizXXE',
          BusinessName: 'CBD',
          date: '15 July 5:00 PM',
          fullName: 'ShadyNB',
          City: 'hyg hy yah',
          postalCode: 'B G',
          website: 'Accepted',
          amount: '28929.13',
          paidby: 'Cash',
          action: (
            <Button
              onClick={this.handleOpenModal}
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}>
              Details
            </Button>
          )
        },
        {
          id: '5',
          startDate: '22 Dec ',
          address: '385 D Wapda Town',
          Email: 'xyz@gmail.com',
          lastName: 'waizshhid',
          PhoneNumber: 'JUST CBD',
          businessType: 'WaizZZD',
          BusinessName: 'DD CC NN',
          date: '15 July 5:00 PM',
          fullName: 'ShadyMA',
          City: 'hyh hy yah',
          postalCode: 'B G',
          website: 'Accepted',
          amount: '28991.13',
          paidby: 'Cash',
          action: (
            <Button
              onClick={this.handleOpenModal}
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}>
              Details
            </Button>
          )
        },
        {
          id: '6',
          startDate: '23 Dec ',
          address: '386 D Wapda Town',
          Email: 'xyz@gmail.com',
          lastName: 'waizshahd',
          PhoneNumber: 'JUST CBD',
          businessType: 'WaizYYB',
          BusinessName: 'JUST BDA',
          fullName: 'Exe',
          City: 'hyi hy yah',
          date: '15 July 5:00 PM',
          postalCode: 'B G',
          website: 'Accepted',
          amount: '2899.113',
          paidby: 'Cash',
          action: (
            <Button
              onClick={this.handleOpenModal}
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}>
              Details
            </Button>
          )
        },
        {
          id: '7',
          startDate: '24 Dec ',
          address: '387 D Wapda Town',
          Email: 'xyz@gmail.com',
          lastName: 'waizshahi',
          PhoneNumber: 'JUST CBD',
          businessType: 'WaizNNC',
          BusinessName: 'Name',
          date: '15 July 5:00 PM',
          fullName: 'Morris',
          City: 'hyj hy yah',
          postalCode: 'B G',
          website: 'Accepted',
          amount: '28990.13',
          paidby: 'Cash',
          action: (
            <Button
              onClick={this.handleOpenModal}
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}>
              Details
            </Button>
          )
        }
      ]
    };
  }

  // getUserRequests = () => {
  //   axios.get('/admin/UserRequests')
  //     .then(
  //       response => {
  //         console.log(response.data)
  //         var newOrder = [];
  //         response.data.map(order => {
  //           order.action = <span><Button
  //             onClick={()=>this.approveRequest(order._id)}
  //             style={{ fontFamily: 'calibri', backgroundColor: '#90ee90',marginRight:'0.5vh',textTransform:'none'  }}
  //           >Approve</Button><Button  style={{ fontFamily: 'calibri', backgroundColor: '#ff7f7f',textTransform:'none' }}>Deny</Button></span>

  //           newOrder.push(order)
  //         })
  //         this.setState({ Orders: newOrder })
  //       }
  //     )
  //     .catch(err => console.log(err))
  // }

  // approveRequest = (id) => {
  //   axios.post('/admin/approveRequest', {id})
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }

  handleOpenModal = () => {
    this.setState({
      showModal: true
    });
    this.approveRequest();
  };
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  onRowClick = (e, rowData) => {
    this.setState({ rowData: rowData });
  };

  componentDidMount = () => {
    // console.log(this.context)
    if (!this.context.isAuthenticated) {
      this.props.history.push('/admin/Signin');
    }
    this.setState({
      Orders: this.context.commercial
    });
  };
  render() {
    return (
      <Grid
        container
        spacing={2}
        style={{
          padding: '3vh',
          backgroundColor: 'white',
          height: '90vh'
        }}
        xs={12}>
        <Grid item md={12} xs={12}>
          <Card>
            <MaterialTable
              columns={[
                {
                  title: 'Name',
                  field: 'contactName',

                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                },
                {
                  title: 'Email',
                  field: 'email',
                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                },

                {
                  title: 'Business Name',
                  field: 'businessName',
                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                },
                {
                  title: 'Phone #',
                  field: 'phoneNo',
                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                },

                {
                  title: 'Date',
                  field: 'timeToContact',
                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                }
                // {
                //   title: 'Action', field: 'action',
                //   cellStyle: {
                //     fontFamily: 'calibri',
                //   },
                // },
              ]}
              data={this.context.commercial}
              icons={{
                Check: Check,
                DetailPanel: ChevronRight,
                Export: SaveAlt,
                Filter: FilterList,
                FirstPage: FirstPage,
                LastPage: LastPage,
                NextPage: ChevronRight,
                PreviousPage: ChevronLeft,
                Search: Search,
                ThirdStateCheck: Remove,
                SortArrow: ArrowDownward,
                Add: AddBox,
                ViewColumn: ViewColumn,
                Clear: Clear,
                ResetSearch: Clear,
                Edit: Edit,
                Delete: Delete
              }}
              onRowClick={this.onRowClick}
              options={{
                headerStyle: {
                  // backgroundColor: '#dddddd',
                  background: '#3f51b5',
                  color: '#FFF'
                },
                actionsColumnIndex: -1,
                // paging: false,
                rowStyle: x => {
                  if (x.tableData.id % 2) {
                    return { backgroundColor: '#f2f2f2' };
                  }
                }
              }}
              title=""
            />
          </Card>
          <Modal
            aria-describedby="transition-modal-description"
            aria-labelledby="transition-modal-title"
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
            className="Modal"
            closeAfterTransition
            onClose={this.handleCloseModal}
            open={this.state.showModal}>
            <Fade in={this.state.showModal}>
              <div
                className="Paper"
                style={{
                  marginLeft: '10vh',
                  marginTop: '10vh',
                  marginRight: '10vh'
                }}>
                <Card>
                  <CardHeader
                    style={{ backgroundColor: '#dddddd' }}
                    title="User's Request Details"
                    variant="h1"
                  />
                  <Divider />
                  <CardContent>
                    <Grid container md={12} spacing={2} xs={12}>
                      <Grid item md={4} xs={4}>
                        <TextField
                          defaultValue={this.state.rowData.fullName}
                          id="search"
                          label="First Name"
                          style={{ width: '25ch' }}
                          type="search"
                        />
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <TextField
                          defaultValue={this.state.rowData.lastName}
                          id="lastName"
                          label="Last Name"
                          style={{ width: '25ch' }}
                          type="search"
                        />
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <TextField
                          defaultValue={this.state.rowData.PhoneNumber}
                          id="PhoneNumber"
                          label="Phone Number"
                          style={{ width: '25ch' }}
                          type="search"
                        />
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <TextField
                          defaultValue={this.state.rowData.Email}
                          id="Email"
                          label="Email"
                          style={{ width: '25ch' }}
                          type="search"
                        />
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <TextField
                          defaultValue={this.state.rowData.businessType}
                          id="Email"
                          label="Business Type"
                          style={{ width: '25ch' }}
                          type="search"
                        />
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <TextField
                          defaultValue={this.state.rowData.BusinessName}
                          id="Email"
                          label="Business Name"
                          style={{ width: '25ch' }}
                          type="search"
                        />
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <TextField
                          defaultValue={this.state.rowData.City}
                          id="Email"
                          label="City"
                          style={{ width: '25ch' }}
                          type="search"
                        />
                      </Grid>

                      <Grid item md={4} xs={4}>
                        <TextField
                          defaultValue={this.state.rowData.City}
                          id="Email"
                          label="City"
                          style={{ width: '25ch' }}
                          type="search"
                        />
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <TextField
                          defaultValue={this.state.rowData.postalCode}
                          id="Email"
                          label="Postal Code"
                          style={{ width: '25ch' }}
                          type="search"
                        />
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <TextField
                          defaultValue={this.state.rowData.website}
                          id="Email"
                          label="Website"
                          style={{ width: '25ch' }}
                          type="search"
                        />
                      </Grid>
                    </Grid>
                    <Grid container md={12} spacing={4} xs={12}>
                      <Grid item xs={6}>
                        <Button
                          onClick={this.approveRequest}
                          style={{
                            fontFamily: 'calibri',
                            backgroundColor: '#dddddd',
                            marginLeft: '75vh'
                          }}>
                          {' '}
                          Approve
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          onClick={this.rejectRequest}
                          style={{
                            fontFamily: 'calibri',
                            backgroundColor: '#dddddd'
                          }}>
                          {' '}
                          Deny
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
    );
  }
}

export default AdminCommercial;
