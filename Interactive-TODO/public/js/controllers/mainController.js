var todoApp = angular.module('todoApp', []);

todoApp.controller('mainController', ['$scope', 'todoUIService', function($scope, todoUIService) {

    // Waiting for the services to return the data then setting the scope variables
        todoUIService.get().then(function(data) {

            $scope.todo = data.data[1].group;

        });
}]);