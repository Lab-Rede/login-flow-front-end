import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_END_POINT,
  timeout: 30000,
});

export default api;
