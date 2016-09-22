'use strict';

// Import express and api router module.
var express = require('express');
var router = require('./api/index');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json())

// Route home path to angular application, api calls to router module.
app.use('/', express.static('public'));
app.use('/api', router);

app.listen(3000, function () {
  console.log('Running on 3000!');
});
