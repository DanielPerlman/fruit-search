// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called fruits
mongoose.connect('mongodb://localhost/fruits');

var Fruit = require('../models/Fruit.js');

var docArray = [
  new Fruit({ "name": "Oranges", "src": "images/oranges-1.jpeg", "store": "Ica-test", "location": "Stockholm", "price": "0.50",
    "comments": [
        {"text": "Yay it was great!", "stars": 5},
        {"text": "Meh", "stars": 1},
        {"text": "It was ok", "stars": 3},
        {"text": "Could have been better", "stars": 4}
      ]}),
  new Fruit({ "name": "Pears", "src": "images/pears-3.jpeg", "store": "Coop", "location": "Stockholm", "price": "0.70",
    "comments": [
        {"text": "Yay it was great!", "stars": 5},
        {"text": "Meh", "stars": 1},
        {"text": "It was ok", "stars": 3},
        {"text": "Could have been better", "stars": 4}
      ]}),
  new Fruit({ "name": "Grapes", "src": "images/grapes-4.jpeg", "store": "Starbucks", "location": "Stockholm", "price": "1.20",
    "comments": [
        {"text": "Yay it was great!", "stars": 5},
        {"text": "Meh", "stars": 1},
        {"text": "It was ok", "stars": 3},
        {"text": "Could have been better", "stars": 4}
      ]}),
  new Fruit({ "name": "Oranges", "src": "images/oranges-3.jpeg", "store": "Ica", "location": "Stockholm", "price": "0.50",
    "comments": [
        {"text": "Yay it was great!", "stars": 5},
        {"text": "Meh", "stars": 1},
        {"text": "It was ok", "stars": 3},
        {"text": "Could have been better", "stars": 4}
      ]}),
  new Fruit({ "name": "Pears", "src": "images/pears-1.jpeg", "store": "Coop", "location": "Stockholm", "price": "0.70",
    "comments": [
        {"text": "Yay it was great!", "stars": 5},
        {"text": "Meh", "stars": 1},
        {"text": "It was ok", "stars": 3},
        {"text": "Could have been better", "stars": 4}
      ]}),
  new Fruit({ "name": "Grapes", "src": "images/grapes-2.jpeg", "store": "Starbucks", "location": "Stockholm", "price": "1.20",
    "comments": [
        {"text": "Yay it was great!", "stars": 5},
        {"text": "Meh", "stars": 1},
        {"text": "It was ok", "stars": 3},
        {"text": "Could have been better", "stars": 4}
      ]}),
  new Fruit({ "name": "Oranges", "src": "images/oranges-4.jpeg", "store": "Ica", "location": "Stockholm", "price": "0.50",
    "comments": [
        {"text": "Yay it was great!", "stars": 5},
        {"text": "Meh", "stars": 1},
        {"text": "It was ok", "stars": 3},
        {"text": "Could have been better", "stars": 4}
      ]}),
  new Fruit({ "name": "Pears", "src": "images/pears-2.jpeg", "store": "Coop", "location": "Stockholm", "price": "0.70",
    "comments": [
        {"text": "Yay it was great!", "stars": 5},
        {"text": "Meh", "stars": 1},
        {"text": "It was ok", "stars": 3},
        {"text": "Could have been better", "stars": 4}
      ]}),
  new Fruit({ "name": "Grapes", "src": "images/grapes-1.jpeg", "store": "Starbucks", "location": "Stockholm", "price": "1.20",
    "comments": [
        {"text": "Yay it was great!", "stars": 5},
        {"text": "Meh", "stars": 1},
        {"text": "It was ok", "stars": 3},
        {"text": "Could have been better", "stars": 4}
      ]})
];

var result = [];
var total = docArray.length;

function saveAll(){
  var doc = docArray.pop();

  doc.save(function(err, saved){
    if (err) throw err;//handle error

    result.push(saved[0]);

    if (--total) saveAll();
    else console.log('done');
  })
}

saveAll();
