'use strict';

angular.module('fruitSearchApp')
.directive('resultsList', function(){
  return {
    templateUrl: 'templates/results-list.html',
    replace: true
  };
});
