/*
Modules on angular
1. Create the Module 
2. Register my components (controllers and so) in the module
3. I tell Angular to use that module

*/
(function() {
  var app = angular.module("myApp", []); // Step 1

  var MainController = function($scope, $http) { // Step 2

    var onUserComplete = function(response) {
      $scope.user = response.data;
    };

    var onError = function(response) {
      $scope.error = response.data;
    };

    $scope.search = function(username) {
      $http.get("http://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    };

    $scope.username = "angular"
    $scope.message = "Github user"

  }

  // Step 3 + Set the ng-app on the HTML angular init statement and pass the module
  app.controller("MainController", ["$scope", "$http", MainController]);

}());