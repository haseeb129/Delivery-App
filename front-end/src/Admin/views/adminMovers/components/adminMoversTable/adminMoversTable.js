import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { AdminContext } from '../../../../context/AdminContext';
import MaterialTable from 'material-table';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

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

import { getInitials } from '../../../../helpers';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const MoversTable = (props) => {
  const { className, users, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    const { users } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = users.map((user) => user.id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <AdminContext.Consumer>
      {(context) => {
        return context.isAuthenticated ? (
          <Card className={classes.root}>
            <MaterialTable
              columns={[
                {
                  title: 'Id',
                  field: '_id',
                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                },
                {
                  title: 'Company Name',
                  field: 'companyName',
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
                  title: 'Location',
                  field: 'city',
                  cellStyle: {
                    fontFamily: 'calibri'
                  }
                }
              ]}
              data={context.movers}
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
              // onRowClick={this.onRowClick}

              options={{
                headerStyle: {
                  // backgroundColor: '#3f51b5',
                  background: '#3f51b5',
                  color: '#FFF',
                  span: {
                    backgroundColor: 'red'
                  }
                },
                // actionsColumnIndex: -1,
                // paging: false,
                rowStyle: (x) => {
                  if (x.tableData.id % 2) {
                    return { backgroundColor: '#f2f2f2' };
                  }
                }
              }}
              title=""
            />
          </Card>
        ) : (
          <Redirect to="/admin/Signin" />
        );
      }}
    </AdminContext.Consumer>
  );
};

MoversTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default MoversTable;
