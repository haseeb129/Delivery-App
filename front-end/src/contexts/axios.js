import axios from 'axios';
// console.log(process.env)

const instance = axios.create({
  baseURL:
    process.env.REACT_APP_BACKEND_API_URL ||
    'https://gt-api.moversconnections.com/api/'
  // baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:3001/api/'
});

export default instance;
