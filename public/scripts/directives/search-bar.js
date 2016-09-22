'use strict';

angular.module('fruitSearchApp')
.directive('searchBar', function(){
  return {
    templateUrl: 'templates/search-bar.html',
    replace: true
  };
});
