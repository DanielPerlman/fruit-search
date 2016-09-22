'use strict';

// Import express and fruit schema.
var express = require('express');
var mongoose = require('mongoose');
var Fruit = require('../models/Fruit.js');

var router = express.Router();

// API route for retrieving fruits
router.get('/fruits', function (req, res) {
  // Connect to Mongo fruit database and retrieve all fruits.
  Fruit.find(function (err, fruits) {
    if (err) return next(err);
    res.json(fruits);
  });
});

// API route for updating a fruit
router.put('/fruits/:id', function(req, res, next) {
  var fruit = req.body;
  delete fruit._id
  delete fruit.$$hashKey
  Fruit.findByIdAndUpdate(req.params.id, fruit, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
