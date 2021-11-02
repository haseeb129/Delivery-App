import MaterialTable from 'material-table';
import React from 'react'
import axios from 'axios'
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Fade,
  Modal,
  Backdrop,
  Button,

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


class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      rowData: '',

      showModal: false,
      Category: [
                 {
                    index:'1',
                    category:"XXaa",

                    // action: <Button style={{fontFamily: "calibri", backgroundColor: "#dddddd"}}
                    //                 onClick={this.handleOpenModal}>Details</Button>
                },
                {
                    index:'2',
                    category:"XxxX",
                    // action: <Button style={{fontFamily: "calibri", backgroundColor: "#dddddd"}}
                    //                 onClick={this.handleOpenModal}>Details</Button>
                },
      ],
      SubCategory:[
          {
            index:'1',
            subCategory:"XX",
          },
          {
            index:'2',
            subCategory:"abcd",
          },
      ]
    };

  }


    // getUserRequests = () => {
    //   axios.get('/admin/Category')
    //     .then(
    //       response => {
    //         console.log(response.data)
    //         var newOrder = [];
    //         response.data.map(order => {
    //           order.action = <span><Button onClick={()=>this.approveRequest(order._id)} style={{ fontFamily: "calibri", backgroundColor: "#90ee90",marginRight:"0.5vh",textTransform:"none"  }}
    //             >Approve</Button><Button  style={{ fontFamily: "calibri", backgroundColor: "#ff7f7f",textTransform:"none" }}>Deny</Button></span>
             
    //           newOrder.push(order)
    //         })
    //         this.setState({ Category: newOrder })
    //       }
    //     )
    //     .catch(err => console.log(err))
    // }


    // approveRequest = (id) => {
    //   axios.post('/admin/approveRequest', {id})
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err))
    // }

    // handleOpenModal = () => {
    //   this.setState({
    //     showModal: true,
    //   });
    //   this.approveRequest()
    // }
    // handleCloseModal = () => {
    //   this.setState({ showModal: false });
    // }

    onRowClick = (e, rowData) => {
      this.setState({ rowData: rowData })
    }

    // componentDidMount = () => {
    //   this.getUserRequests();
    // }

    render() {

      return (
        <Grid
          container
          spacing={2}
          style={{padding:"2vh", backgroundColor: 'white',height: '90vh'}}
              xs={12}
        >
          <Grid item md={6} xs={6}>
            <Card>
              <MaterialTable
              
                columns={[
                        {
                      title: 'Index', field: 'index',
                     cellStyle: {
                         fontFamily: "calibri",
                      },
                  },
                  
                  {
                    title: 'Category', field: 'category',            
                    cellStyle: {
                      fontFamily: 'calibri',
                    },
                  },
                //   {
                //     title: 'Action', field: 'action',
                //     cellStyle: {
                //       fontFamily: "calibri",
                //     },
                //   },
                //   {
                //     title: 'Phone Number', field: 'PhoneNumber',
                //     cellStyle: {
                //       fontFamily: 'calibri',
                //     },
                //   },
               
                // {
                //      title: 'Business Name', field: 'BusinessName',
                //       cellStyle: {
                //        fontFamily: "calibri",
                //        },
                //    },

                //   {
                //     title: 'City', field: 'City',
                //     cellStyle: {
                //       fontFamily: 'calibri',
                //     },

                //   },
                //   {
                //     title: 'Action', field: 'action',
                //     cellStyle: {
                //       fontFamily: 'calibri',
                //     },
                //   },

                ]}
                data={this.state.Category}
                actions={[

                    rowData => ({
                      icon: Delete,
                      tooltip: 'Delete User',
                      // eslint-disable-next-line no-restricted-globals
                      onClick: (event, rowData) => {
                        let newData = [];
                        this.state.Category.map((category) => {
                          //console.log(category)
                          if (rowData.index != category.index) {
                            newData.push(category)
                          }
                          // console.log(rowData.index)
                          //if (category.name != value) newData.push(tableRow);
                        });
                        this.setState({ Category: newData })
                        //setTableLanguages(newData);
                      },
    
                    })
                  ]}
                 
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
                    backgroundColor: '#dddddd',
                    color: '#black'
                  }
                }}
                options={{
                  actionsColumnIndex: -1,


                  paging: false,


                }}
                title=""
              />

            </Card>
                     </Grid>
                     <Grid item md={6} xs={6}>
            <Card>
              <MaterialTable
              
                columns={[
                        {
                      title: 'Index', field: 'index',
                     cellStyle: {
                         fontFamily: "calibri",
                      },
                  },
                  
                  {
                    title: 'Sub Category', field: 'subCategory',            
                    cellStyle: {
                      fontFamily: 'calibri',
                    },
                  },
                //   {
                //     title: 'Action', field: 'action',
                //     cellStyle: {
                //       fontFamily: "calibri",
                //     },
                //   },
                //   {
                //     title: 'Phone Number', field: 'PhoneNumber',
                //     cellStyle: {
                //       fontFamily: 'calibri',
                //     },
                //   },
               
                // {
                //      title: 'Business Name', field: 'BusinessName',
                //       cellStyle: {
                //        fontFamily: "calibri",
                //        },
                //    },

                //   {
                //     title: 'City', field: 'City',
                //     cellStyle: {
                //       fontFamily: 'calibri',
                //     },

                //   },
                //   {
                //     title: 'Action', field: 'action',
                //     cellStyle: {
                //       fontFamily: 'calibri',
                //     },
                //   },

                ]}
                data={this.state.SubCategory}
                actions={[

                    rowData => ({
                      icon: Delete,
                      tooltip: 'Delete User',
                      // eslint-disable-next-line no-restricted-globals
                      onClick: (event, rowData) => {
                        let newData = [];
                        this.state.SubCategory.map((subCategory) => {
                          //console.log(subCategory)
                          if (rowData.index != subCategory.index) {
                            newData.push(subCategory)
                          }
                          // console.log(rowData.index)
                          //if (category.name != value) newData.push(tableRow);
                        });
                        this.setState({ SubCategory: newData })
                        //setTableLanguages(newData);
                      },
    
                    })
                  ]}
                 
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
                    backgroundColor: '#dddddd',
                    color: '#black'
                  }
                }}
                options={{
                  actionsColumnIndex: -1,


                  paging: false,


                }}
                title=""
              />

            </Card>
                     </Grid>


        </Grid>
      )
    }
}

export default Category;
