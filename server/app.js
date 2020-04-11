'use strict';

const express = require('express');
const cors = require('cors');
const apiRoutes = require('./api/routes');

const ADDR = process.env.ADDR || 'localhost';
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use('/api', apiRoutes);

const server = app.listen(PORT, ADDR, function (err) {
  if (!err) {
    const { address, port } = server.address();
    console.log(
      `${app.get('env')} Server running at http://${address}:${port}/`
    );
  }
});

module.exports = app;
