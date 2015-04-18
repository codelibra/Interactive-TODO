var todoApp = angular.module('todoApp', []);

todoApp.controller('mainController', ['$scope', 'todoUIService', function($scope, todoUIService) {


    var getAllTodo = function() {
        // Waiting for the services to return the data then setting the scope variables
        todoUIService.get().then(function(data) {
            $scope.todos = data.data;
            if ($scope.todos !== null) {
                $scope.selectedTodo = $scope.todos[0];
            }
        });
    };
    getAllTodo();

    $scope.populateTodo = function(id) {
        console.log("populate todo");
        var fetchedTodos = $scope.todos;

        for (var todo in fetchedTodos) {
            if (fetchedTodos[todo]._id == id) {
                $scope.selectedTodo = fetchedTodos[todo];
            }
        }
    };

    $scope.submitTodo = function() {
        var obj = {};
        obj.name = $scope.newTodo;
        //create the new todo with the name that is provided
        todoUIService.create(obj).then(function(data) {
            //update the UI data and set the selelcted element to the new todo
            if (data.data !== null) {
                $scope.todos.push(data.data);
                $scope.selectedTodo = data.data;
            }
        });
        //clear the input text box once the todo is submitted
        $scope.newTodo = '';
    };

    $scope.removeTodo = function(id) {
        //delete the given id
        todoUIService.delete(id).then(function(data) {
            //update the UI data with the new todo's
            getAllTodo();
        });
    };

}]);
