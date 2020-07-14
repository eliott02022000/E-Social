/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
/* eslint-disable import/no-unresolved */
import api from './api';

export function getMyInfo() {
  api.get('/user/me').then((e) => console.log(e));
}

export function getUserInfo() {
  api.get('/user/:id').then((e) => console.log(e));
}

export function getAllUsers() {
  api.get('/user').then((e) => console.log(e));
}

export function blockUser() {
  api.get('/user/block/:id').then((e) => console.log(e));
}

export function unBlockUser() {
  api.delete('/user/block/:id').then((e) => console.log(e));
}