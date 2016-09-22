// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and use database called fruits
mongoose.connect('mongodb://localhost/fruits');

// Create a schema
var FruitSchema = new mongoose.Schema({
  name: String,
  src: String,
  store: String,
  location: String,
  price: Number,
  purchased: Boolean,
  skipped: Boolean,
  comments: [{
    text: String,
    stars: Number
  }],
});

// Create a model based on the schema
var Fruit = mongoose.model('Fruit', FruitSchema);

module.exports = mongoose.model('Fruit', FruitSchema);
