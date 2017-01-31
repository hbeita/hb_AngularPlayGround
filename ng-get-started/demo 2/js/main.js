(function() {
  var app = angular.module("myApp", []);

  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
    };

    var onError = function(response) {
      $scope.error = response.data;
    };

    $http.get("http://api.github.com/users/hbeita")
      .then(onUserComplete, onError);

    $scope.message = "Hello"

  }

  app.controller("MainController", MainController);

}());