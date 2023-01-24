const path = require('path');
const express = require('express');

const api = require('./router/api');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api/v1', api);

module.exports = app;
