import axios from 'axios';

export const baseURL = 'http://212.47.241.143:5000';

const instance = axios.create({
  baseURL,
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  // },
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = token;

  return config;
});

export default instance;
