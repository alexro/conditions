'use strict';

const fs = require('fs');
const path = require('path');

function getConditions(req, res) {
  // normally we should request the file from a remote or get from a db
  // if we read data from disk then shall stream it
  // here readFileSync is used for simplicity
  const file = path.join(__dirname, './data/conditions.json');
  try {
    const data = fs.readFileSync(file, 'utf8');
    res.writeHead(200, {
      'Content-Type': 'text/json; charset=utf-8',
    });
    res.end(data);
  } catch (err) {
    // normally write to the log
    res.writeHead(500);
    res.end(JSON.stringify(err));
  }
}

module.exports = {
  getConditions,
};
