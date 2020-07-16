/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
/* eslint-disable import/no-unresolved */
import api from './api';

export function friendsAccept() {
  api.get('/friendship/request/:id/accept').then((e) => console.log(e));
}

export function friendsReject() {
  api.get('/friendship/request/:id/reject').then((e) => console.log(e));
}

export function sendRequest() {
  api.post('/friendship/request').then((e) => console.log(e));
}