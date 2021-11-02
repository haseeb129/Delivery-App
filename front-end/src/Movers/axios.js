import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://gt-api.moversconnections.com/api/'
});

export default instance;
