import axios from 'axios';
import { baseURL } from '@/utils/api';

const TOKEN_STORAGE_KEY = 'access_token';

export function isAuthenticated() {
  return !!localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function getUserInfo() {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  return isAuthenticated() && JSON.parse(atob(token.split('.')[1]));
}

export function login({ email, password }) {
  const formData = new URLSearchParams();
  formData.append('username', email);
  formData.append('password', password);

  return axios.post(`${baseURL}/auth/login`, formData)
    .then(({ data }) => {
      localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
      return data;
    });
}

export function register({ email, password, name }) {
  const formData = new URLSearchParams();
  formData.append('username', email);
  formData.append('password', password);
  formData.append('name', name);

  return axios.post(`${baseURL}/auth/register`, formData)
    .then(({ data }) => {
      localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
      return data;
    }).catch((error) => {
      console.log(error);
    });
}

// export function logout() {
//   const formData = new URLSearchParams();
//   return axios.post(`${baseURL}/auth/register`, formData)
//     .then(({ data }) => {
//       localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
//       return data;
//     });
// }