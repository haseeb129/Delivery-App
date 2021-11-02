import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

import Routes from './Routes';
import StepperDataContextProvider from "contexts/StepperDataContext";
import MoverContextProvider from './Movers/contexts/MoverContext'
import AdminContextProvider from './Admin/context/AdminContext'
const browserHistory = createBrowserHistory();


export default class App extends Component {
 
 render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <StepperDataContextProvider>
            <MoverContextProvider>
              <AdminContextProvider>
                <Routes />
              </AdminContextProvider>
            </MoverContextProvider>
          </StepperDataContextProvider>
        </Router>
      </ThemeProvider>
    );
  }
}
