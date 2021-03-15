const express = require('express');
const router = express.Router();
const gridRoute = require('./grid.router');

router.use('/grid',gridRoute);

module.exports = router;