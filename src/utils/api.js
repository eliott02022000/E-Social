import axios from 'axios';

export const baseURL = 'http://212.47.241.143:5000';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = `Bearer ${localStorage.getItem('access_token')}`;
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.common.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem('access_token');
//   // eslint-disable-next-line no-param-reassign
//   config.headers.Authorization = token;

//   return config;
// });

export default instance;
