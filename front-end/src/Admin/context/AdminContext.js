import React, { createContext, Component } from 'react';
import axios from './axios';
import Geocode from 'react-geocode';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export const AdminContext = createContext();

class AdminContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated:
        localStorage.getItem('adminToken') === null ? true : true,
      loginError: '',
      admin:
        localStorage.getItem('adminToken') !== null
          ? jwt_decode(localStorage.getItem('adminToken'))
          : {},
      movers: [],
      commercial: [],
      reservations: []
    };
  }

  componentDidMount() {
    if (this.state.isAuthenticated) {
      axios
        .get('/commercial/getAll')
        .then((res) => {
          this.setState({
            commercial: res.data.commercialCustomers
          });
          // console.log(res)
        })
        .catch((error) => {
          console.log(error);
        });

      axios.get('/jobs/getAll').then(res => {
        Geocode.setApiKey('AIzaSyAe-RvE9UpwF-SNkKvlpt4YpjOgDfaUCpQ');
        Geocode.enableDebug();
                  for (let i = 0; i < res.data.jobs.length; i++) {
            if (
              res.data.jobs[i].reservation !== null &&
              Object.keys(res.data.jobs[i].orderId).length > 0 &&
              res.data.jobs[i].orderId.origin.hasOwnProperty('lat')
            ) {
              Geocode.fromLatLng(
                res.data.jobs[i].orderId.origin.lat,
                res.data.jobs[i].orderId.origin.lon
              ).then(
                (responseFrom) => {
                  // console.log(response)
                  const addressFrom = responseFrom.results[0].formatted_address;
                  // console.log(addressFrom.split(',')[1]);
                  res.data.jobs[i].from = addressFrom.split(',')[1];
                  Geocode.fromLatLng(
                    res.data.jobs[i].orderId.origin.lat,
                    res.data.jobs[i].orderId.origin.lon
                  ).then(
                    (response) => {
                      // console.log(response)
                      const addressTo = response.results[0].formatted_address;
                      // console.log(addressTo.split(',')[1]);
                      res.data.jobs[i].to = addressTo.split(',')[1];
                      // if(res.data[i].reservation !== null && Object.keys(res.data.reservation).length > 0){
                      //   console.log(res.data[i])

                      // }
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                },
                (error) => {
                  console.error(error);
                }
              );
            }
          }
          let data = res.data.jobs.filter((dataItems) => {
            return (
              dataItems.from !== null &&
              dataItems.to !== null
            );
          });
          this.setState({
            reservations: data
          });
      }).catch((error) => {
          console.log(error);
        });

      axios
        .get('/customers/getAll')
        .then((res) => {
          console.log(res);
          // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
          Geocode.setApiKey('AIzaSyAe-RvE9UpwF-SNkKvlpt4YpjOgDfaUCpQ');

          // set response language. Defaults to english.
          // Geocode.setLanguage('en');

          // set response region. Its optional.
          // A Geocoding request with region=es (Spain) will return the Spanish city.
          // Geocode.setRegion('es');

          // Enable or disable logs. Its optional.
          Geocode.enableDebug();

          for (let i = 0; i < res.data.length; i++) {
            if (
              res.data[i].reservation !== null &&
              Object.keys(res.data[i].reservation).length > 0 &&
              res.data[i].reservation.hasOwnProperty('fromLatitude')
            ) {
              Geocode.fromLatLng(
                res.data[i].reservation.fromLatitude,
                res.data[i].reservation.fromLongitude
              ).then(
                (responseFrom) => {
                  // console.log(response)
                  const addressFrom = responseFrom.results[0].formatted_address;
                  // console.log(addressFrom.split(',')[1]);
                  res.data[i].reservation.from = addressFrom.split(',')[1];
                  Geocode.fromLatLng(
                    res.data[i].reservation.toLatitude,
                    res.data[i].reservation.toLongitude
                  ).then(
                    (response) => {
                      // console.log(response)
                      const addressTo = response.results[0].formatted_address;
                      // console.log(addressTo.split(',')[1]);
                      res.data[i].reservation.to = addressTo.split(',')[1];
                      // if(res.data[i].reservation !== null && Object.keys(res.data.reservation).length > 0){
                      //   console.log(res.data[i])

                      // }
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                },
                (error) => {
                  console.error(error);
                }
              );
            }
          }
          // console.log(res);
          let data = res.data.filter((dataItems) => {
            return (
              dataItems.reservation !== null &&
              dataItems.reservation.fromLatitude !== null
            );
          });
          this.setState({
            // reservations: data
          });
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get('/mover/getAll')
        .then((res) => {
          this.setState({
            movers: res.data.movers
          });
          // console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  handleLogin = (userData) => {
    const { loginEmail, loginPassword } = userData;
    axios
      .post('/auth/login', { email: loginEmail, password: loginPassword })
      .then((res) => {
        localStorage.setItem('adminToken', res.data.token);
        this.setState({
          isAuthenticated: true,
          admin: { email: loginEmail }
        });
        // console.log(res)
      })
      .catch((error) => {
        console.log(error.response.data.message);
        this.setState({
          loginError: error.response.data.message
        });
      });
    console.log(userData);
    // if (loginEmail === 'admin@admin.com' && loginPassword === '123') {
    //   localStorage.setItem('token', '1234');
    //   this.setState({
    //     isAuthenticated: true,
    //     admin: { email: loginEmail }
    //   });
    // } else {
    //   this.setState({
    //     loginError: 'Wrong Credentials'
    //   });
    // }
  };

  handleLogout = () => {
    localStorage.removeItem('adminToken');
    this.setState({
      isAuthenticated: false,
      amdin: {}
    });
    this.props.history.push('/admin/Signin');
  };
  render() {
    return (
      <AdminContext.Provider
        value={{
          ...this.state,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout
        }}>
        {this.props.children}
      </AdminContext.Provider>
    );
  }
}
export default withRouter(AdminContextProvider);
