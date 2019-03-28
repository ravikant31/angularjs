(function () {
'use strict'
    
angular.module("myFirstApp", [])

.controller("MyFirstController", ["$scope", function($scope){
    $scope.message = "Hello World!"
}]);

})();