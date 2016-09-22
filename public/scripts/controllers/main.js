'use strict';

// Main controllers setup
angular.module('fruitSearchApp')
.controller('MainController', function($scope) {
  // store fruit types
  $scope.fruitTypes = [
    {'name' : 'Oranges'},
    {'name' : 'Pears'},
    {'name' : 'Grapes'}
  ];

  // allow user to filter based on type of fruit
  $scope.searchFruit = function (name) {
    // loop through fruit types array and select/deselect based on provided string
    $scope.fruitTypes.map(function (fruit) {
      fruit.selected = (fruit.name == name ? true : false);
    });

    // set selected fruit variable so that it's reachable by the FruitSearchController
    $scope.selectedFruit = name;
  };
})
.controller('FruitSearchController', function($scope, dataService) {
  // get all fruits from data service and filter
  dataService.getFruits(function (response) {
    $scope.allFruits = response.data;
    $scope.filterFruits();
  });

  // watch selectedFruit and filter whenever there is a change
  $scope.$watch('selectedFruit', function () {
    $scope.filterFruits();
  });

  // check if fruits have been retrieved, then filter the list based on fruit
  // name, wether it has been purchased or skipped
  $scope.filterFruits = function () {
    if ($scope.allFruits)
      $scope.fruits = $scope.allFruits.filter(function (fruit) {
        return fruit.name == $scope.selectedFruit && !fruit.purchased && !fruit.skipped;
      });
  };

  // if user provides a keyword, return only fruits that have the keyword
  // in the store or the location variable
  $scope.searchFruits = function (keyword) {
    if (keyword && keyword.length > 0) {
      // reset list first
      $scope.filterFruits();
      $scope.fruits = $scope.fruits.filter(function (fruit) {
        return fruit.store.indexOf(keyword) > -1 || fruit.location.indexOf(keyword) > -1;
      });
    } else {
      // if keyword is empty, reset list
      $scope.filterFruits();
    }
  }

  // returns an array for ng-repeat based on stars count
  $scope.getStars = function (stars) {
    return new Array(stars);
  };

  // set fruit to purchased, update in db and then reset list
  $scope.buyFruit = function (fruit) {
    fruit.purchased = true;
    dataService.updateFruit(fruit, function (response) {
      console.log(response);
    });
    $scope.filterFruits();
  }

  // set fruit to skipped, update in db and then reset list
  $scope.skipFruit = function (fruit) {
    fruit.skipped = true;
    dataService.updateFruit(fruit, function (response) {
      console.log(response);
    });
    $scope.filterFruits();
  }
});
