import MaterialTable from 'material-table';
import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Fade,
  Modal,
  Backdrop,
  Typography,
  Button
} from '@material-ui/core';
import CustomizedStepper from './adminStepper';
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

import { FaWindowClose } from 'react-icons/fa';
import CardZZ from './adminCard';
import { AdminContext } from '../../context/AdminContext';

class Orders extends React.Component {
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
          date: '23 May 4:00 PM',
          locationTo: 'A',
          locationFrom: 'B',
          stats: 'unassigned',
          startdate: '22 Nov ',
          address: '381 D Wapda Town',
          emailUser: 'xyz@gmail.com',
          emailClient: 'waishahid@gmail.com',
          orderTo: 'JUST CBD',
          orderFrom: 'WaizXXYY',
          phoneClient: '+91 1234607890',
          phoneUser: '+91 7894607890',
          storeAddress: 'Indira Cricle,India',
          user: 'hye hy yah',
          store: 'B G',
          status: 'Accepted',
          amount: '23899.13',
          paidby: 'Cash',
          action: (
            <Button
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}
              onClick={this.handleOpenModal}>
              Details
            </Button>
          )
        },
        {
          id: '3',
          date: '23 May 4:00 PM',
          locationTo: 'B',
          locationFrom: 'C',
          stats: 'unassigned',
          startdate: '29 Nov ',
          address: '383 D Wapda Town',
          emailUser: 'xyz@gmail.com',
          emailClient: 'aizshahid@gmail.com',
          orderTo: 'JUST CBD',
          orderFrom: 'WaizXXZ',
          phoneClient: '+91 1256780090',
          phoneUser: '+92 1234127890',
          storeAddress: 'Indira Cricle,India',
          user: 'hyf hy yah',
          store: 'B G',
          status: 'Accepted',
          amount: '28499.13',
          paidby: 'Cash',
          action: (
            <Button
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}
              onClick={this.handleOpenModal}>
              Details
            </Button>
          )
        },
        {
          id: '4',
          date: '23 May 4:00 PM',
          locationTo: 'C',
          locationFrom: 'D',
          stats: 'unassigned',
          startdate: '30 Nov ',
          address: '384 D Wapda Town',
          emailUser: 'xyz@gmail.com',
          emailClient: 'waizsahid@gmail.com',
          orderTo: 'JUST CBD',
          orderFrom: 'WaizXXE',
          phoneClient: '+91 1234000090',
          phoneUser: '+93 5554607890',
          storeAddress: 'Indira Cricle,India',
          user: 'hyg hy yah',
          store: 'B G',
          status: 'Accepted',
          amount: '28929.13',
          paidby: 'Cash',
          action: (
            <Button
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}
              onClick={this.handleOpenModal}>
              Details
            </Button>
          )
        },
        {
          id: '5',
          date: '23 May 4:00 PM',
          locationTo: 'D',
          locationFrom: 'E',
          stats: 'unassigned',
          startdate: '22 Dec ',
          address: '385 D Wapda Town',
          emailUser: 'xyz@gmail.com',
          emailClient: 'waizshhid@gmail.com',
          orderTo: 'JUST CBD',
          orderFrom: 'WaizZZD',
          phoneClient: '+91 1234123490',
          phoneUser: '+94 1234607890',
          storeAddress: 'Indira Cricle,India',
          user: 'hyh hy yah',
          store: 'B G',
          status: 'Accepted',
          amount: '28991.13',
          paidby: 'Cash',
          action: (
            <Button
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}
              onClick={this.handleOpenModal}>
              Details
            </Button>
          )
        },
        {
          id: '6',
          date: '23 May 4:00 PM',
          locationTo: 'E',
          locationFrom: 'F',
          stats: 'unassigned',
          startdate: '23 Dec ',
          address: '386 D Wapda Town',
          emailUser: 'xyz@gmail.com',
          emailClient: 'waizshahd@gmail.com',
          orderTo: 'JUST CBD',
          orderFrom: 'WaizYYB',
          phoneClient: '+91 1345678874',
          phoneUser: '+95 8884607890',
          storeAddress: 'Indira Cricle,India',
          user: 'hyi hy yah',
          store: 'B G',
          status: 'Accepted',
          amount: '2899.113',
          paidby: 'Cash',
          action: (
            <Button
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}
              onClick={this.handleOpenModal}>
              Details
            </Button>
          )
        },
        {
          id: '7',
          date: '23 May 4:00 PM',
          locationTo: 'F',
          locationFrom: 'G',
          stats: 'unassigned',
          startdate: '24 Dec ',
          address: '387 D Wapda Town',
          emailUser: 'xyz@gmail.com',
          emailClient: 'waizshahi@gmail.com',
          orderTo: 'JUST CBD',
          orderFrom: 'WaizNNC',
          phoneClient: '+91 8247567890',
          phoneUser: '+96 1114607890',
          storeAddress: 'Indira Cricle,India',
          user: 'hyj hy yah',
          store: 'B G',
          status: 'Accepted',
          amount: '28990.13',
          paidby: 'Cash',
          action: (
            <Button
              style={{ fontFamily: 'calibri', backgroundColor: '#dddddd' }}
              onClick={this.handleOpenModal}>
              Details
            </Button>
          )
        }
      ]
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  onRowClick = (e, rowData) => {
    this.setState({ rowData: rowData });
  };

  componentDidMount = () => {
    if (!this.context.isAuthenticated) {
      this.props.history.push('/admin/Signin');
    }
    // console.log(this.context.reservations);
    this.setState({
      Orders: this.context.reservations
    });
  };

  render() {
    return (
      <Grid
        container
        spacing={2}
        xs={12}
        style={{
          padding: '3vh',
          backgroundColor: 'white',
          height: '100vh'
        }}>
        <Grid item xs={12} md={8}>
          <Card>
            <MaterialTable
              title=""
              onRowClick={this.onRowClick}
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
              columns={[
                {
                  title: 'ID',
                  field: '_id',
                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                },
                {
                  title: 'Customer Name',
                  field: 'customerId.name',
                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                },
                // {
                //   title: 'Start Date', field: 'date',
                //   cellStyle: {

                //     fontFamily: "calibri",

                //   },

                // },
                {
                  title: 'From Location',
                  field: 'from',

                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                },
                {
                  title: 'To Location',
                  field: 'to',
                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                },
                // {
                //   title: 'Status', field: 'status',
                //   cellStyle: {
                //     fontFamily: "calibri",
                //   },
                // },
                {
                  title: 'Amount',
                  // field: 'reservation.amountPaid',
                  render: (rowData) => (
											<span>{console.log(rowData.orderId.totalPrice)}{rowData.orderId.totalPrice ? parseFloat(rowData.orderId.totalPrice).toFixed(2) : ''} </span>
											),
                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                },
                {
                  title: 'Status',
                  field: 'status',
                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                }
                // {
                //   title: 'Action', field: 'action',
                //   cellStyle: {
                //     fontFamily: "calibri",
                //   },
                // },
              ]}
              data={this.context.reservations}
              options={{
                headerStyle: {
                  // backgroundColor: '#dddddd',
                  background: '#3f51b5',
                  // color: '#black'
                  color: '#FFF'
                },
                // actionsColumnIndex: -1,
                tableLayout: 'fixed',
                // paging: false,
                // actionsColumnIndex: -1,
                rowStyle: x => {
                  if (x.tableData.id % 2) {
                    return { backgroundColor: '#f2f2f2' };
                  }
                }
              }}
              actions={
                [
                  // rowData => ({
                  //   icon: Edit,
                  //   tooltip: 'Accept Job',
                  //   // eslint-disable-next-line no-restricted-globals
                  //   onClick: (event, rowData) => {
                  //     let newData = [];
                  //     this.state.Orders.map((order) => {
                  //       //console.log(order)
                  //       if (rowData.id == order.id) {
                  //         rowData.stats = 'assigned';
                  //       }
                  //       newData.push(order)
                  //       // console.log(rowData.id)
                  //       //if (order.name != value) newData.push(tableRow);
                  //     });
                  //     this.setState({ Orders: newData })
                  //     //setTableLanguages(newData);
                  //   },
                  // })
                ]
              }
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <CardZZ rowData={this.state.rowData} />
        </Grid>
      </Grid>
    );
  }
}

export default Orders;
