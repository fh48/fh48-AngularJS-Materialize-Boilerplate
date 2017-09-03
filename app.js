'use strict';

let anyApp = angular.module('anyApp',['ngResource','ui.materialize']);

 anyApp.controller('homeCtrl', ['$scope', '$resource', function($scope, $resource ){

  $scope.x = "x";
  $scope.y = "y";
  $scope.hello = "hello worlds"

  $scope.print =  function(){
    console.log("lol")
  }



}]);
