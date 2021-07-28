import React from 'react';
import axios from 'axios';

// URLs

const MAIN_URL = 'https://almrooj.com/'
const API_URL = 'https://moroj-apis.herokuapp.com/api/';

// Main methods

export function postRequest(item, api, goto) {
  axios({
    method: "post",
    url: api,
    data: item,
    headers: { "Accept": "application/json" },
  })
    .then(function (response) {
      //handle success

      // localStorage.setItem('user', JSON.stringify(item));
      localStorage.setItem('user', JSON.stringify(response.data.data))
      localStorage.setItem('stell', 'code');
      window.location.replace('http://localhost:3000/' + goto);
    })
    .catch(function (response) {
      //handle error
      
      console.log(response.error);
    });
}

export function logOut() {
  localStorage.clear()
  window.location.replace('http://localhost:3000/');
}