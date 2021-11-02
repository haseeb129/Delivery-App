import React, { createContext, Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from './axios';
import Geocode from 'react-geocode';
import jwt_decode from 'jwt-decode';

export const MoverContext = createContext();

class MoverContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signupForm: {
        companyName: '',
        name: '',
        email: '',
        password: '',
        phone: ''
      },
      mover:
        localStorage.getItem('moverToken') !== null
          ? jwt_decode(localStorage.getItem('moverToken'))
          : {},
      loginForm: {
        email: '',
        password: ''
      },
      isAuthenticated:
        localStorage.getItem('moverToken') === null ? false : true,
      area: '',
      reservations: [],
      cities: [],
      errorMsg: '',
      showErroModal: true,
      loader: false,
      signupSuccess: ''
    };
  }

  componentDidMount() {
    if (this.state.isAuthenticated) {
      axios
        .get('/customers/getAll')
        .then((res) => {
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
            console.log(res.data[i]);

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
                  //   console.log(addressFrom.split(',')[1]);
                  res.data[i].reservation.from = addressFrom.split(',')[1];
                  Geocode.fromLatLng(
                    res.data[i].reservation.toLatitude,
                    res.data[i].reservation.toLongitude
                  ).then(
                    (response) => {
                      // console.log(response)
                      const addressTo = response.results[0].formatted_address;
                      //   console.log(addressTo.split(',')[1]);
                      res.data[i].reservation.to = addressTo.split(',')[1];

                      axios
                        .get('/jobs/getAll')
                        .then((jobs) => {
                          console.log(jobs.data, res.data[i].jobs);
                          res.data[i].jobs = jobs.data.filter(
                            (job) => job.id === res.data[i].jobs[0].id
                          );
                          // this.setState({
                          //   reservations:res.data
                          // })
                        })
                        .catch((err) => {
                          console.error(err);
                        });
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

          // this.setState({
          //   reservations:res.data
          // })
          console.log(res.data);
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
    }
    this.getCititesData();
  }

  // function acceptJobHandler(id){
  //   this.setState({
  //     loader: true
  //   });
  //   let data = {
  //     moverId: '145',
  //     status: 'assigned'
  //   };

  //   let jobsAssignRes = await axios.put(`/jobs/updateJobStatus/${id}`, data);
  //   if (jobsAssignRes.status === 200) {
  //     axios
  //       .get('/customers/getAll')
  //       .then((res) => {
  //         // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  //         Geocode.setApiKey('AIzaSyAe-RvE9UpwF-SNkKvlpt4YpjOgDfaUCpQ');
  //         // set response language. Defaults to english.
  //         Geocode.setLanguage('en');
  //         // set response region. Its optional.
  //         // A Geocoding request with region=es (Spain) will return the Spanish city.
  //         Geocode.setRegion('es');
  //         // Enable or disable logs. Its optional.
  //         Geocode.enableDebug();
  //         for (let i = 0; i < res.data.length; i++) {
  //           if (
  //             res.data[i].reservation !== null &&
  //             Object.keys(res.data[i].reservation).length > 0 &&
  //             res.data[i].reservation.hasOwnProperty('fromLatitude')
  //           ) {
  //             Geocode.fromLatLng(
  //               res.data[i].reservation.fromLatitude,
  //               res.data[i].reservation.fromLongitude
  //             ).then(
  //               (responseFrom) => {
  //                 // console.log(response)
  //                 const addressFrom = responseFrom.results[0].formatted_address;
  //                 //   console.log(addressFrom.split(',')[1]);
  //                 res.data[i].reservation.from = addressFrom.split(',')[1];
  //                 Geocode.fromLatLng(
  //                   res.data[i].reservation.toLatitude,
  //                   res.data[i].reservation.toLongitude
  //                 ).then(
  //                   (response) => {
  //                     // console.log(response)
  //                     const addressTo = response.results[0].formatted_address;
  //                     //   console.log(addressTo.split(',')[1]);
  //                     res.data[i].reservation.to = addressTo.split(',')[1];
  //                     axios
  //                       .get('/jobs/getAll')
  //                       .then((jobs) => {
  //                         console.log(jobs.data, res.data[i].jobs);
  //                         res.data[i].jobs = jobs.data.filter(
  //                           (job) => job.id === res.data[i].jobs[0].id
  //                         );
  //                         // console.log(res)
  //                         console.log(res.data);
  //                         // this.setState({
  //                         //   reservations:res.data,
  //                         //   loader : false,
  //                         //   showErroModal:false,
  //                         // })
  //                       })
  //                       .catch((err) => {
  //                         console.error(err);
  //                         this.setState({
  //                           errorMsg: err.message,
  //                           loader: false,
  //                           showErroModal: true
  //                         });
  //                       });
  //                   },
  //                   (error) => {
  //                     console.error(error);
  //                     this.setState({
  //                       errorMsg: error.message,
  //                       loader: false,
  //                       showErroModal: true
  //                     });
  //                   }
  //                 );
  //               },
  //               (error) => {
  //                 console.error(error);
  //                 this.setState({
  //                   errorMsg: error.message,
  //                   loader: false,
  //                   showErroModal: true
  //                 });
  //               }
  //             );
  //           }
  //         }

  //         // // console.log(res)
  //         let data = res.data.filter((dataItems) => {
  //           return (
  //             dataItems.reservation !== null &&
  //             dataItems.reservation.fromLatitude !== null
  //           );
  //         });
  //         this.setState({
  //           reservations: data,
  //           loader: false,
  //           showErroModal: false
  //         });
  //         //   console.log(res.data)
  //         //     this.setState({
  //         //       reservations:res.data,
  //         //       loader : false,
  //         //       showErroModal:false,
  //         //     })
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         this.setState({
  //           errorMsg: error.message,
  //           loader: false,
  //           showErroModal: true
  //         });
  //       });
  //   }
  // };

  // handleCloseModal = () => {
  //   this.setState({
  //     showErroModal: false
  //   });
  // };

  getCititesData = async () => {
    try {
      let allZones = await axios.get('zone/getAll');

      if (allZones.status === 200) {
        for (let i = 0; i < allZones.data.zones.length; i++) {
          console.log(allZones);
          let area = await axios.get(
            `/area/getAreaByZone/${allZones.data.zones[i]._id}`
          );

          if (area.status === 200) {
            console.log(area);
            this.setState((prevState) => {
              return { cities: [...prevState.cities, ...area.data.area] };
            });
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  signupHandleChange = (e) => {
    const { name, value, checked, type } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      signupForm: {
        ...prevState.signupForm,
        [name]: type === 'checkbox' ? checked : value
      }
    }));
  };
  loginHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      loginForm: {
        ...prevState.loginForm,
        [name]: value
      }
    }));
  };

  handleSignUp = async (userData) => {
    console.log(userData);
    let data = {
      areaId: this.state.area._id,
      companyName: this.state.signupForm.companyName,
      name: this.state.signupForm.name,
      email: this.state.signupForm.email,
      password: this.state.signupForm.password,
      phone: this.state.signupForm.phone,
      city: this.state.area.name
    };

    try {
      let signup = await axios.post('mover/signup', data);

      if (signup.status === 200 || signup.status === 201) {
        this.setState((prevState) => {
          return {
            ...prevState,
            signupSuccess: signup.data.message,
            errorMsg: '',
            signupForm: {
              companyName: '',
              name: '',
              email: '',
              password: '',
              phone: ''
            }
          };
        });
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data.error) {
        this.setState({
          errorMsg: err.response.data.error,
          loader: false,
          showErroModal: true
        });
      } else if (err.response && err.response.data.message) {
        this.setState({
          errorMsg: err.response.data.message,
          loader: false,
          showErroModal: true
        });
      } else {
        this.setState({
          errorMsg: err.message,
          loader: false,
          showErroModal: true
        });
      }
    }
  };

  handleLogin = async () => {
    let data = {
      email: this.state.loginForm.email,
      password: this.state.loginForm.password
    };

    try {
      let login = await axios.post('mover/login', data);

      if (login.status === 200 || login.status === 201) {
        this.setState((prevState) => {
          return {
            ...prevState,
            mover: { email: this.state.loginForm.email },
            errorMsg: '',
            isAuthenticated: true,
            loginForm: {
              email: '',
              password: ''
            }
          };
        });
        localStorage.setItem('moverToken', login.data.token);
        this.props.history.push('/mover/dashboard');
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data.error) {
        this.setState({
          errorMsg: err.response.data.error,
          loader: false,
          showErroModal: true
        });
      } else if (err.response && err.response.data.message) {
        this.setState({
          errorMsg: err.response.data.message,
          loader: false,
          showErroModal: true
        });
      } else {
        this.setState({
          errorMsg: err.message,
          loader: false,
          showErroModal: true
        });
      }
    }
  };

  areaChangeHandler = (area) => {
    console.log(area);
    this.setState({
      area: area
    });
  };
  handleLogout = () => {
    localStorage.removeItem('moverToken');
    this.setState({
      isAuthenticated: false,
      amdin: {}
    });
    this.props.history.push('/mover/Signin');
  };
  render() {
    return (
      <MoverContext.Provider
        value={{
          ...this.state,
          signupHandleChange: this.signupHandleChange,
          loginHandleChange: this.loginHandleChange,
          handleSignUp: this.handleSignUp,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          acceptJobHandler: this.acceptJobHandler,
          handleCloseModal: this.handleCloseModal,
          areaChangeHandler: this.areaChangeHandler
        }}>
        {this.props.children}
      </MoverContext.Provider>
    );
  }
}
export default withRouter(MoverContextProvider);
