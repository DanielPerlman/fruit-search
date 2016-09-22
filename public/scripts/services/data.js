'use strict';

// Simple service for interacting with api
angular.module('fruitSearchApp')
.service('dataService', function($http) {
  // retrieve all fruits
  this.getFruits = function(cb) {
    $http.get('/api/fruits').then(cb);
  };

  // stringify fruit object and send
  this.updateFruit = function (fruit, cb) {
    $http.put('/api/fruits/' + fruit._id, JSON.stringify(fruit)).then(cb);
  }
});
