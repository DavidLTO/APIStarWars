/*
    npm init
    criar api.js
    npm install request — Save
    node api    
*/

const request = require('request');
const hostname = 'https://swapi.dev/api/';
const path = 'people/1/';

request(`${hostname}${path}`, (err, res, body) => {

    console.log(body);
    
});