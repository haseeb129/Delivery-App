import axios from 'axios';
axios.defaults.headers['authorization'] = localStorage.getItem('moverToken');
const instance = axios.create({
  // baseURL: 'http://gotmoversbackend-env.eba-4f2b36ry.ap-south-1.elasticbeanstalk.com',
  // baseURL:'http://gotmovers-env.eba-8mz8aixz.us-east-2.elasticbeanstalk.com',
  // baseURL:'http://d1d8uk8aq2bjf6.cloudfront.net'
  // baseURL : 'http://gotmovers-api-dev.us-west-2.elasticbeanstalk.com'
  // baseURL : 'http://d2q4h3mwzdhykr.cloudfront.net'
  // baseURL : process.env.REACT_APP_BACKEND_API_URL ||  'http://localhost:3001/api/'
    baseURL:
  process.env.REACT_APP_BACKEND_API_URL ||
  'https://gt-api.moversconnections.com/api/'

  // baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:3001/api/'
});

export default instance;
