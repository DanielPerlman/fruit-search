'use strict';

angular.module('fruitSearchApp')
.directive('sidebar', function(){
  return {
    templateUrl: 'templates/sidebar.html',
    replace: true
  };
})
.directive('fruitSearch', function () {
  return {
    templateUrl: 'templates/fruit-search.html',
    replace: true,
    controller: 'FruitSearchController',
    scope: {
      selectedFruit: '=selected'
    }
  };
});
