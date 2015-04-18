var todoApp = angular.module('todoApp', []);

todoApp.controller('mainController', ['$scope', 'todoUIService', function($scope, todoUIService) {

        // Waiting for the services to return the data then setting the scope variables
        todoUIService.get().then(function(data) {
        	console.log(data);
            $scope.todos = data.data;
        });

        $scope.populateTodo = function(id){
        	var fetchedTodos = $scope.todos;

        	for ( todo in fetchedTodos ){
        		if(fetchedTodos[todo]._id == id ){
        		  	$scope.selectedTodo = fetchedTodos[todo];
        	    }
        	}
        }
}]);
