'use strict';

let anyApp = angular.module('anyApp',['ngResource','ui.materialize']);

 anyApp.controller('homeCtrl', ['$scope', '$resource','$http', function($scope, $resource, $http ){

  $scope.x = "x";
  $scope.y = "y";
  $scope.hello = "hello world"

  $scope.deploy = function(){

    let URL = "http://localhost:8080/engine-rest/deployment/"

    let deployment = $resource(URL).get

  }



  $scope.print =  function(){
    console.log("lol")
  }



}]);
