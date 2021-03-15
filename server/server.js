// server.js
const express = require('express');
//DB Configuration
require('./src/database');
const app = express();
const PORT = 8080;
const router = express.Router();
const bodyParser = require('body-parser');
const routes = require('./src/routes');

// will redirect all the non-api routes to react frontend
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//use this function to obtain userId from auth token need to implement authentication
app.use(function (req, res, next) {
    req.user = {
        userId : "3123123"
    }
    next();
});
app.use('/api', routes);

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});