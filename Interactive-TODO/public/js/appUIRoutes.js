angular.module('appUIRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/todo', {
                    templateUrl: 'views/todo.html',
                    controller: 'todoController'
                    })

        .when('/note', {
                    templateUrl: 'views/note.html',
                    controller: 'noteController'
                    });
    $locationProvider.html5Mode(true);
}]);