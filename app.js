const path = require('path');
const express = require('express');

const api = require('./router/api');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// this line adds the routes that the api creates to handle the db and events
app.use('/api/v1', api);

// this give the client side the routing for the views and I believe this is where client side rendering vs server side rendering come
//TODO: need to be searched
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
