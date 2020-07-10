import axios from 'axios';

export const baseURL = 'http://212.47.241.143:5000';

const instance = axios.create({
  baseURL,
});

export default instance;
