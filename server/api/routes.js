const express = require('express');
const router = express.Router();

const { getConditions } = require('./conditions');

router.get('/conditions', getConditions);

module.exports = router;
