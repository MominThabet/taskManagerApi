const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port', port);
});
